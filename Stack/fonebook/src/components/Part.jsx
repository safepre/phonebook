import styled from 'styled-components'

const TropicalButton = styled.button`
  background-color: #ffd700; /* Gold, a tropical color */
  color: #006400; /* Dark Green, another tropical color */
  font-size: 1.2rem;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`

const Part = ({ name, number, removePerson }) => (
  <div key={name}>
    {' '}
    {name} {number}{' '}
    <TropicalButton onClick={removePerson}>delete</TropicalButton>
  </div>
)

export default Part
