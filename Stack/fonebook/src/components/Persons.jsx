import Part from './Part'

import styled from 'styled-components'

const TropicalPersons = styled.div`
  background-color: #87ceeb; /* Light Sky Blue, a tropical color */
  padding: 20px;
  border-radius: 10px;
`

const TropicalPart = styled.div`
  background-color: #ffd700; /* Gold, a tropical color */
  color: #006400; /* Dark Green, another tropical color */
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DeleteButton = styled.button`
  background-color: #ff6347; /* Tomato, a tropical color */
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`

const Persons = ({ persons, filter, removePerson }) => (
  <TropicalPersons>
    {persons
      .filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
      .map(({ name, number, id }) => (
        <TropicalPart key={id}>
          <div>
            <h4>{name}</h4>
            <p>{number}</p>
          </div>
          <DeleteButton onClick={removePerson(id, name)}>Delete</DeleteButton>
        </TropicalPart>
      ))}
  </TropicalPersons>
)

export default Persons
