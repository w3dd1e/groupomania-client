import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { redirect, useLoaderData, Link, Form } from 'react-router-dom';
import { getUserData } from '../helpers/helpers';

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
	const res = await getPost(params.postId);
	const data = await res.json();
	if (data === null) {
		throw new Error('Post not found');
	}
	return data;
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
	const post = useLoaderData();

	return (
		<Container component='main' maxWidth='xs' sx={{ p: 0 }}>
			<h2 className='pageTitle'>Post</h2>

			<Stack
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					p: 2,
				}}
			>
				<Paper elevation={1} sx={{ width: 1 }}>
					<Card sx={{ maxWidth: 345 }}>
						<CardHeader
							avatar={
								<Avatar
									alt={post.username}
									src={post.profileImage}
								></Avatar>
							}
							title={post.headline}
							subheader=''
							titleTypographyProps={{
								fontSize: 18,
								fontWeight: 700,
							}}
						/>

						<CardContent>
							<Typography variant='body2' color='text.secondary'>
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
				<Stack direction='column' flex={1} sx={{ width: 0.5, m: 1 }}>
					<Button
						component={Link}
						to='/editPost'
						variant='contained'
						color='primary'
						sx={{ my: 2 }}
						size='small'
					>
						Edit Post
					</Button>
					<Form
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
						>
							Delete Post
						</Button>
					</Form>
				</Stack>
			</Stack>
		</Container>
	);
}
