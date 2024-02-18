import "./toolbar.css";

const listOptions = ["Recent", "Popular"];
function Filter() {
  return (
    <div className='Filter'>
      <label>
        <select className='sort'>
          {listOptions.map((option) => {
            return <option>{option}</option>;
          })}
        </select>
      </label>
    </div>
  );
}

export default Filter;
