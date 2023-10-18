import styled from 'styled-components'

const PartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff; /* Twitch purple as an example */
  color: #f4e9d3; /* Slightly darker cream text color */
  text-shadow: 1px 1px 1px #000; /* Add a subtle black outline */
  border: 1px solid #7c37d4; /* Darker purple border */
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle box shadow */
`

const DeleteButton = styled.button`
  background-color: #50267e; /* Darker Twitch purple */
  color: #fff; /* White text for high contrast */
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #402064; /* Darker purple on hover */
  }

  margin-left: 15px; /* Add space to the left of the button */
`

const Part = ({ name, number, removePerson }) => (
  <PartContainer key={name}>
    {' '}
    {name} {number} <DeleteButton onClick={removePerson}>Delete</DeleteButton>
  </PartContainer>
)

export default Part
