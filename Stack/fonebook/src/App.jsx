import { useEffect, useState } from 'react'
import Filter from './components/Filter.jsx'
import PersonForm from './components/PersonForm.jsx'
import Persons from './components/Persons.jsx'
import personService from './services/persons.jsx'
import Notification from './components/Notification.jsx'
import styled from 'styled-components'

const ModernHeading = styled.h2`
  font-family: 'Helvetica', Arial, sans-serif;
  font-weight: bold;
  color: #fff; /* White text for high contrast on dark background */
  font-size: 1.5rem; /* Adjust font size as needed */
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
`

const ModernAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: 'Helvetica', Arial, sans-serif;
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
    <ModernAppContainer>
      <ModernHeading>Phonebook</ModernHeading>
      <Notification message={Msg} error={errorMsg} />
      <Filter filter={newFilter} handleChange={handleData(setFilter)} />
      <ModernHeading> Create </ModernHeading>
      <PersonForm
        handle={addName}
        name={newName}
        number={newNumber}
        handleChangeName={handleData(setNewName)}
        handleChangeNumber={handleData(setNewNumber)}
      />
      <ModernHeading>Numbers</ModernHeading>
      {persons && (
        <Persons
          persons={persons}
          filter={newFilter}
          removePerson={handleRemovePerson}
        />
      )}
    </ModernAppContainer>
  )
}

export default App
