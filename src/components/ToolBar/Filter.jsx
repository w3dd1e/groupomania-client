import "./toolbar.css";

const listOptions = ["Recent", "Popular"];
function Filter() {
  return (
    <div className='Filter'>
      <select className='sort'>
        {listOptions.map((option) => {
          return <option>{option}</option>;
        })}
      </select>
    </div>
  );
}

export default Filter;
