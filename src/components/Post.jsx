import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import { Paper } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { redirect, useLoaderData, Link } from 'react-router-dom';
import { getUserData } from '../helpers/helpers';

//Fetch Post
async function getPost() {
	const token = getUserData('token');
	const path = window.location.pathname;
	const postId = path.split('/');
	console.log(path);

	const postURL = `http://localhost:3000/posts/${postId[2]}`;

	let response = await fetch([postURL], {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
	});
	if (response.status === 401) {
		return redirect('/login');
	}
	console.log('Data fetched from database!');
	return response;
}

//Loader funciton for Router
export async function loader() {
	const res = await getPost();
	const data = await res.json();
	return data;
}

export default function Post() {
	const post = useLoaderData();

	return (
		<Container component='main' maxWidth='xs' sx={{ p: 2 }}>
			<h2 className='pageTitle'>Post</h2>

			<Grid container justifyContent='center' spacing={3} sx={{ mt: 1 }}>
				<Grid>
					<Paper elevation={6}>
						<Card sx={{ maxWidth: 345 }}>
							<CardHeader
								avatar={
									<Avatar
										alt={post.user.username}
										src={post.user.profileImage}
									></Avatar>
								}
								title={post.headline}
								subheader={post.createdAt.split('T')[0]}
								titleTypographyProps={{
									fontSize: 18,
									fontWeight: 700,
								}}
							/>

							<CardContent>
								<Typography
									variant='body2'
									color='text.secondary'
								>
									{post.content}
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									component={Link}
									to={`/profile/` + post.user_id}
									size='small'
									color='primary'
								>
									{post.user.username}
								</Button>
							</CardActions>
						</Card>
					</Paper>
				</Grid>
				<Stack direction='column' flex={1} sx={{ p: 1.5 }}>
					<Button variant='contained' color='primary' sx={{ my: 2 }}>
						Edit Post
					</Button>
					<Button variant='contained' color='error' sx={{ my: 2 }}>
						Delete Post
					</Button>
				</Stack>
			</Grid>
		</Container>
	);
}
