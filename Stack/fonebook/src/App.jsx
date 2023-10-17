import { useEffect, useState } from 'react'
import Filter from './components/Filter.jsx'
import PersonForm from './components/PersonForm.jsx'
import Persons from './components/Persons.jsx'
import personService from './services/persons.jsx'
import Notification from './components/Notification.jsx'
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #87ceeb; /* Light Sky Blue, a tropical color */
  height: 100vh; /* Center vertically */
  padding: 20px;
`

const Heading = styled.h2`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: 'Your Chosen Font', sans-serif; /* Replace with your chosen font */
  color: #006400; /* Dark Green, a tropical color */
  font-size: 2rem;
  letter-spacing: 1px;
  line-height: 1.5;
`

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setFilter] = useState('')
  const [Msg, setMsg] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    personService.getAll().then(person => setPersons(person))
  }, [])

  const addName = event => {
    const nameObj = { name: newName, number: newNumber }
    const foundPerson = persons.find(person => person.name === newName)
    event.preventDefault()

    if (foundPerson) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      )
        personService
          .update(foundPerson.id, nameObj)
          .then(returnedPerson => {
            console.log(returnedPerson)
            setPersons(
              persons.map(person =>
                person.id !== foundPerson.id ? person : returnedPerson
              )
            )
            setMsg(`Number has been succesfully updated!'`)
            setTimeout(() => {
              setMsg(null)
            }, 5000)
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            setErrorMsg(`${newName} has been deleted from the server!`)
            setTimeout(() => {
              setErrorMsg(null)
            }, 5000)
          })
    } else {
      personService
        .create(nameObj)
        .then(addedPerson => {
          setMsg(`Added '${nameObj.name}'`)
          setTimeout(() => {
            setMsg(null)
          }, 5000)
          setPersons(persons.concat(addedPerson))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          // this is the way to access the error message
          setErrorMsg(`${error.response.data.error}`)
          setTimeout(() => {
            setErrorMsg(null)
          }, 5000)
        })
    }
  }
  //const handleNameChange = (event) => setNewName(event.target.value)
  //use the bottom one to eliminate redundancy above
  const handleData = setValue => event => setValue(event.target.value)

  const handleRemovePerson = (id, name) => () => {
    console.log(name)
    console.log(id)
    if (window.confirm(`Delete ${name}?`)) {
      personService.deletePerson(id).then(() => {
        setPersons(persons.filter(person => person.name !== name))
      })
      setMsg('Entry has been succesfully deleted from the phonebook!')
      setTimeout(() => {
        setMsg(null)
      }, 5000)
    }
  }
  return (
    <AppContainer>
      <Heading>Phonebook</Heading>
      <Notification message={Msg} error={errorMsg} />
      <Filter filter={newFilter} handleChange={handleData(setFilter)} />
      <Heading> Create </Heading>
      <PersonForm
        handle={addName}
        name={newName}
        number={newNumber}
        handleChangeName={handleData(setNewName)}
        handleChangeNumber={handleData(setNewNumber)}
      />
      <Heading>Numbers</Heading>
      {persons && (
        <Persons
          persons={persons}
          filter={newFilter}
          removePerson={handleRemovePerson}
        />
      )}
    </AppContainer>
  )
}

export default App
