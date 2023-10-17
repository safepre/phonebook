import styled from 'styled-components'

const FormContainer = styled.div`
  background-color: #ffd700; /* Gold, a tropical color */
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`

const InputField = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  label {
    width: 100px; /* Adjust the width as needed */
    margin-right: 10px;
  }
  input {
    flex: 1;
    padding: 5px;
    border: 1px solid #87ceeb; /* Light Sky Blue, a tropical color */
    border-radius: 5px;
  }
`

const SubmitButton = styled.button`
  background-color: #87ceeb; /* Light Sky Blue, a tropical color */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`
const PersonForm = ({
  handle,
  name,
  number,
  handleChangeName,
  handleChangeNumber,
}) => (
  <FormContainer>
    <form onSubmit={handle}>
      <InputField>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleChangeName} />
      </InputField>
      <InputField>
        <label htmlFor="number">Number:</label>
        <input
          type="text"
          id="number"
          value={number}
          onChange={handleChangeNumber}
        />
      </InputField>
      <SubmitButton type="submit">Add</SubmitButton>
    </form>
  </FormContainer>
)
export default PersonForm
