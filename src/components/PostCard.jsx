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
	CardMedia,
	Stack,
} from '@mui/material';
import { Link } from 'react-router-dom';

// This component is rendered in the Feed. It represents a single post in the list.
// props.read is used to conditional style the card based on read status returned from the server
// Posts that habe been read should be rendered with darker background and title colors.
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
					sx={{
						width: '100%',
						p: 2.5,
						pt: 1.5,
						pb: 1,
						display: 'flex',
						aligntItems: 'stretch',
						gap: 1,
						maxHeight: '150px',
						flexWrap: 'wrap',
					}}
				>
					<Stack sx={{ flex: 1, overflow: 'hidden' }}>
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
						<CardContent sx={{ p: 0 }}>
							<Typography
								noWrap
								variant='body1'
								color='text.secondary'
								id='cardBody'
								sx={{
									textOverflow: 'ellipsis',
								}}
							>
								{props.content}
							</Typography>
						</CardContent>
					</Stack>
					{props.imageUrl && (
						<CardMedia
							component='img'
							sx={{
								width: '50px',
								height: '75px',
								ml: 'auto',
								my: 'auto',
							}}
							image={props.imageUrl}
						/>
					)}{' '}
					<CardActions
						sx={{
							p: 0,
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'flex-end',
							width: '100%',
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
								{console.log(props)}
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
