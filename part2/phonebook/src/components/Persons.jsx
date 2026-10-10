
const Persons = (props) => {
    const {filteredPersons} =props
  return (
    <div>
      <ul>
        {filteredPersons.map((person) => (
          <li key={person.name}>
            {person.name} - {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Persons