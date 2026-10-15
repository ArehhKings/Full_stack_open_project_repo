

const FormList = (props) => {
    const {newName, newNumber, handleFormSubmit, handleNumberChange, handleInputChange} = props
  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Add a new contact</h2>
      <div>
        name: <input type="text" value={newName} onChange={handleInputChange} />
      </div>
      <br />
      <div>
        phonenumber:{" "}
        <input type="number" value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default FormList;