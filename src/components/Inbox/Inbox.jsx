import "../../views/app.css";
import Posts from "../Posts/Posts";
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
