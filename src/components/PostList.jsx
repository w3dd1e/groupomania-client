import * as React from 'react';
import List from '@mui/material/List';
import { Stack } from '@mui/material';
import { redirect, useLoaderData } from 'react-router-dom';
import { getUserData } from '../helpers/helpers';
import PostCard from './PostCard';

async function getAllPosts() {
	const token = getUserData('token');

	const postURL = `http://localhost:3000/posts/`;

	let response = await fetch([postURL], {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
	});

	console.log('Data fetched from database!');
	const data = await response.json();
	console.log(data);
	return data;
}

//Loader funciton for Router
export async function loader() {
	const response = await getAllPosts();

	if (response.status === 401) {
		return redirect('/login');
	} else {
		return response;
	}
}

export default function Feed() {
	const data = useLoaderData();
	const listPosts = data.map((post) => (
		<PostCard
			key={post.post_id}
			user_id={post.user_id}
			post_id={post.post_id}
			headline={post.headline}
			content={post.content}
		/>
	));

	return (
		<Stack sx={{ p: 2 }}>
			<h2 className='pageTitle'>Feed</h2>
			<List
				sx={{
					width: '100%',
					maxWidth: 360,
					bgcolor: 'background.paper',
				}}
			>
				{listPosts}
			</List>
		</Stack>
	);
}
