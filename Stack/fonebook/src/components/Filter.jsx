import styled from 'styled-components'

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`

const StyledInput = styled.input`
  border: 2px solid transparent; /* Set a transparent border */
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

const Filter = ({ filter, handleChange }) => (
  <InputContainer>
    <StyledInput value={filter} onChange={handleChange} />
  </InputContainer>
)
export default Filter
