import './Posts.css';
import { FaRegThumbsUp } from 'react-icons/fa6';
const posts = [
	{ title: 'New Post!', body: 'blah blah blah blah blah blah' },
	{ title: 'New Post!', body: 'blah blah blah blah blah blah' },
	{ title: 'New Post!', body: 'blah blah blah blah blah blah' },
];
function Posts() {
	return (
		<>
			<div className='sortAndFilter'>
				<label>
					<select className='sort'>
						<option>Recent</option>
						<option>Popular</option>
					</select>
				</label>
			</div>
			<div className='board'>
				{posts.map((post) => {
					return (
						<div className='post'>
							<div className='postInfo'>
								<h2>{post.title}</h2>
								<p>{post.body}</p>
							</div>
							<FaRegThumbsUp className='thumbsUp' />
						</div>
					);
				})}
			</div>
		</>
	);
}

export default Posts;
