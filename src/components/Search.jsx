import '../App.css';
import { FaRegThumbsUp, FaMagnifyingGlass } from 'react-icons/fa6';
import Navbar from './Navbar';
import ProfileIcon from './ProfileLink';
import Filter from './Filter';

const posts = [
	{ title: 'New Post!', body: 'blah blah blah blah blah blah' },
	{ title: 'New Post!', body: 'blah blah blah blah blah blah' },
	{ title: 'New Post!', body: 'blah blah blah blah blah blah' },
];

function Inbox() {
	return (
		<>
			<div className='toolbar'>
				<ProfileIcon />
				<h1>GroupBoards</h1>
				<Filter />
			</div>
			<div className='board'>
				<form className='search'>
					<input></input>
					<button>
						<FaMagnifyingGlass />
					</button>{' '}
				</form>
				{posts.map((post) => {
					return (
						<div className='post' key={post}>
							<div className='postInfo'>
								<h3>{post.title}</h3>
								<p>{post.body}</p>
							</div>
							<FaRegThumbsUp className='thumbsUp' />
						</div>
					);
				})}
			</div>
			<Navbar />
		</>
	);
}

export default Inbox;
