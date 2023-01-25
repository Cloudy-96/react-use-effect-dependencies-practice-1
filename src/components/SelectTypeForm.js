function SelectTypeForm(props) {
  // Write code here...
const handleChange =(event)=> {
  //in the condole log the .target is a set thing, then we want the value of the target
console.log("change:", event.target.value)
//once we know we have selected the right thing, we can update the dataType
props.setDataType(event.target.value)
}

  return (
    <form className="three-column-grid__expand-two gap-md">
      <label htmlFor="type">Data Type</label>
      <select id="type" name="type" onChange={handleChange}>
        <option value="">Please select...</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
    </form>
  );
}

export default SelectTypeForm;
