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

function PostCard(props) {
	return (
		<>
			<ListItem
				key={props.post_id}
				alignItems='flex-start'
				sx={{ pl: 0 }}
			>
				<ListItemAvatar>
					<Avatar alt={props.username} src={props.profileImage} />
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
								{props.username}
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
