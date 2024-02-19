import Filter from "./Filter";
import Title from "./Title";
import ProfileIcon from "./ProfileIcon";

function Titlebar() {
  return (
    <div className='toolbar'>
      <ProfileIcon />
      <Title />
      <Filter />
    </div>
  );
}

export default Titlebar;
