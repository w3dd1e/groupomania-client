import * as React from 'react';
import {
	ListItem,
	ListItemAvatar,
	ListItemText,
	Avatar,
	Typography,
	Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { getUserData } from '../helpers/helpers';

async function PostCard(props) {
	async function getUserInfo(userId) {
		const token = getUserData('token');
		const userURL = `http://localhost:3000/profile/${userId}`;

		let response = await fetch([userURL], {
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

	const user = await getUserInfo(props.user_id);

	return (
		<>
			<ListItem
				key={props.post_id}
				alignItems='flex-start'
				sx={{ pl: 0 }}
			>
				<ListItemAvatar>
					<Avatar alt={user.username} src={user.profileImage} />
				</ListItemAvatar>
				<ListItemText
					primary={
						<Link to={`/post/${props.post_id}`}>
							{props.headline}
						</Link>
					}
					secondary={
						<React.Fragment>
							<Typography
								sx={{ display: 'inline' }}
								component='span'
								variant='body2'
								color='text.primary'
							>
								{' '}
								{user.username}
							</Typography>
							{props.content}
						</React.Fragment>
					}
				/>
			</ListItem>
			<Divider variant='inset' component='li' />
		</>
	);
}

export default PostCard;
