import * as React from 'react';
import {
	ListItem,
	ListItemAvatar,
	Avatar,
	Typography,
	CardHeader,
	Card,
	CardActions,
	CardContent,
	Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

function PostCard(props) {
	return (
		<>
			<ListItem
				key={props.post_id}
				alignItems='flex-start'
				sx={{ p: 0, width: '100%', my: 1 }}
			>
				<Card
					elevation={props.elevation}
					sx={{ width: '100%', p: 2.5, py: 1.5 }}
				>
					<CardHeader
						title={
							<Link
								className={props.read}
								to={`/post/${props.post_id}`}
								id='cardTitle'
							>
								{props.headline}
							</Link>
						}
						titleTypographyProps={{
							fontSize: 18,
							width: 1,
						}}
						sx={{ p: 0, width: 1, wordWrap: 'anywhere' }}
					></CardHeader>
					<CardContent sx={{ mt: 0.5, mb: 2.5, p: 0 }}>
						<Typography
							noWrap
							variant='body1'
							color='text.secondary'
							id='cardBody'
						>
							{props.content}
						</Typography>
					</CardContent>
					<CardActions
						sx={{
							p: 0,
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'flex-end',
						}}
					>
						<Button
							component={Link}
							to={`/profile/${props.user_id}`}
							size='small'
							sx={{
								display: 'flex',
								alignItems: 'flex-end',
								fontSize: 11,
								p: 0,
							}}
						>
							<ListItemAvatar
								sx={{
									my: 0,
									mr: 1,
									minWidth: 'fit-content',
									alignItems: 'flex-end',
								}}
							>
								<Avatar
									variant='rounded'
									sx={{
										display: 'flex',
										width: 24,
										height: 24,
									}}
									lt={props.username}
									src={props.profileImage}
								/>
							</ListItemAvatar>
							<Typography fontSize='12px'>
								{props.username}
							</Typography>
						</Button>
						<Typography fontSize='12px'>
							{props.createdAt.split('T')[0]}
						</Typography>
					</CardActions>
				</Card>
			</ListItem>
		</>
	);
}

export default PostCard;
