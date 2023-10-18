import styled from 'styled-components'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff; /* White background for the form */
  border: 1px solid #7c37d4; /* Darker purple border */
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle box shadow */
`

const InputContainer = styled.div`
  display: flex;
  color: #f4e9d3; /* Slightly darker cream text color */
  text-shadow: 1px 1px 1px #000; /* Add a subtle black outline */
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`

const StyledInput = styled.input`
  border: 2px solid #000; /* Add a border with the cream color */
  border-radius: 10px; /* Set the border-radius to create rounded corners */
  color: #f4e9d3; /* Text color */
  text-shadow: 1px 1px 1px #000; /* Add text shadow */
  padding: 8px; /* Adjust padding as needed */
  outline: none; /* Remove the default outline */
  box-shadow: none; /* Remove any box-shadow effect */
  transition: text-shadow 0.3s; /* Add a transition for text-shadow */

  &:focus {
    text-shadow: 1px 1px 1px #000; /* Text shadow on focus, matching your InputContainer */
  }
`

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #50267e; /* Darker Twitch purple */
  color: #fff; /* White text for high contrast */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #503180; /* Darker purple on hover */
  }
`

const PersonForm = ({
  handle,
  name,
  number,
  handleChangeName,
  handleChangeNumber,
}) => (
  <StyledForm onSubmit={handle}>
    <InputContainer>
      Name
      <StyledInput value={name} onChange={handleChangeName} />
    </InputContainer>
    <InputContainer>
      Number <StyledInput value={number} onChange={handleChangeNumber} />
    </InputContainer>
    <InputContainer>
      <StyledButton type="submit">Create</StyledButton>
    </InputContainer>
  </StyledForm>
)
export default PersonForm
