import {useState} from 'react';
import Filter from './components/Filter';
import FormList from './components/FormList';
import Persons from './components/Persons';

const App = () =>{
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  }

  const NameAlreadyExist = persons.some(person => person.name === newName);

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newPerson = {name: newName, number: newNumber};
    if (!newName || !newNumber ) {
      alert(`Fill in the empty input`)
      return;
    }
    if (NameAlreadyExist) {
      alert(`${newName} is already in the phonebook`);
      return;
    }
    setPersons([...persons, newPerson]);
    setNewName('');
    setNewNumber('');
  }

const handleSearchFilter = (e) => {
  setSearchTerm(e.target.value)
}
const filteredPersons = persons.filter((person) =>
  person.name.toLowerCase().includes(searchTerm.toLowerCase()),
);

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searchTerm={searchTerm} handleSearchFilter={handleSearchFilter} />

      <h3>Add a new</h3>

      <FormList
        newName={newName}
        newNumber={newNumber}
        handleFormSubmit={handleFormSubmit}
        handleNumberChange={handleNumberChange}
        handleInputChange={handleInputChange}
      />

      <h2>Numbers</h2>

      <Persons filteredPersons={filteredPersons} />
    </div>
  );
}

export default App;