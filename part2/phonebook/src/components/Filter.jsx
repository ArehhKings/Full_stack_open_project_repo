
const Filter = (props) => {
const {searchTerm, handleSearchFilter} = props

  return (
    <div>
      <label htmlFor="filter">Filter shown with:</label>

      <input
        type="text"
        placeholder="Search by name"
        id="filter"
        value={searchTerm}
        onChange={handleSearchFilter}
      />
    </div>
  );
}

export default Filter;