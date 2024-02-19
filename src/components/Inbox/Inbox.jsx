import { Link } from "react-router-dom";
import "./inbox.css";

function Inbox() {
  return (
    <div className='inboxContainer'>
      <Link to='unread'>Unread</Link>
      <Link to='read'>Read</Link>
    </div>
  );
}

export default Inbox;
