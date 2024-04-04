import * as React from 'react';
import {
	Avatar,
	Typography,
	Container,
	Stack,
	Button,
	Paper,
	Card,
	CardHeader,
	CardActions,
	CardContent,
	CardMedia,
} from '@mui/material';
import { redirect, useLoaderData, Link, Form } from 'react-router-dom';
import { getUserData } from '../helpers/helpers';

// This component renders the details of a single post on it's own page

//Fetch Post
async function getPost(postId) {
	const token = getUserData('token');
	const response = await fetch(`http://localhost:3000/posts/${postId}`, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
	});
	if (response.status === 401) {
		return redirect('/login');
	}
	if (response.status === 404) {
		throw new Error('Post not found');
	}
	console.log('Data fetched from database!');
	return response;
}

async function deletePost(postId) {
	const token = getUserData('token');
	const response = await fetch(`http://localhost:3000/posts/${postId}`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
	});
	if (response.status === 401) {
		return redirect('/login');
	}
	if (response.status === 404) {
		throw new Error('Post not found');
	}
	console.log('Deleted!');
	return response;
}

//Loader funciton for Router
export async function loader({ params }) {
	const token = sessionStorage.getItem('token');

	if (token) {
		const res = await getPost(params.postId);
		const data = await res.json();
		if (data === null) {
			throw new Error('Post not found');
		}
		return data;
	} else {
		return redirect('/login');
	}
}

export async function action({ params }) {
	const res = await deletePost(params.postId);
	const data = await res.json();
	if (data === null) {
		throw new Error('Post not found');
	}
	return redirect('/feed');
}

export default function Post() {
	const userId = getUserData('userId');
	const post = useLoaderData();
	const isLoggedIn = parseInt(userId) === post.user_id;
	return (
		<Container component='main' className='mainContainer' sx={{ p: 0 }}>
			<h2 className='pageTitle'>Post</h2>
			<Stack
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					maxWidth: '90%',
					m: 'auto',
					mt: 0.7,
				}}
				id='post'
			>
				<Paper elevation={1} sx={{ width: 1 }}>
					<Card>
						<CardHeader
							avatar={
								<Avatar
									alt={post.username}
									src={post.user.profileImage}
								></Avatar>
							}
							title={post.headline}
							subheader=''
							titleTypographyProps={{
								fontSize: 18,
								fontWeight: 700,
								id: 'postTitle',
							}}
							sx={{ width: 1 }}
						/>
						{console.log(post)}

						{post.imageUrl && (
							<CardMedia
								component='img'
								sx={{
									height: 140,
									aspectRatio: '1/1',
									m: 'auto',
									objectFit: 'contain',
								}}
								image={post.imageUrl}
							/>
						)}

						<CardContent>
							<Typography
								variant='body2'
								color='text.secondary'
								id='postBody'
							>
								{post.content}
							</Typography>
						</CardContent>
						<CardActions
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<Button
								component={Link}
								to={`/profile/` + post.user_id}
								size='small'
								color='primary'
							>
								{post.user.username}
							</Button>
							<Typography sx={{ fontSize: 13, pr: '10px' }}>
								{post.createdAt.split('T')[0]}
							</Typography>
						</CardActions>
					</Card>
				</Paper>
				{
					//Post buttons only render if correct user is logged in
					!isLoggedIn ? null : (
						<Stack
							direction='column'
							flex={1}
							id='bottomStack'
							sx={{
								width: 1,
								m: 1,
								flex: 1,
								display: 'flex',
								alignContent: 'center',
								alignItems: 'center',
							}}
						>
							<div id='buttonGroup'>
								<Button
									component={Link}
									to='edit'
									variant='contained'
									color='primary'
									sx={{ my: 2 }}
									size='small'
									id='button'
								>
									Edit Post
								</Button>
								<Form
									id='button'
									sx={{ width: 1 }}
									method='post'
									action='delete'
									onSubmit={(event) => {
										if (
											!confirm(
												'Please confirm you want to delete this post.'
											)
										) {
											event.preventDefault();
										}
									}}
								>
									<Button
										type='submit'
										variant='contained'
										color='error'
										sx={{ my: 2, width: 1 }}
										size='small'
										id='delete'
									>
										Delete Post
									</Button>
								</Form>
							</div>
						</Stack>
					)
				}
			</Stack>
		</Container>
	);
}
