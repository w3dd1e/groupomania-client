import "../Views/App.css";
import Posts from "../Feed/Posts";
import Titlebar from "../ToolBar/ToolBar";

function Inbox() {
  return (
    <>
      <Titlebar />
      <Posts />
    </>
  );
}

export default Inbox;
