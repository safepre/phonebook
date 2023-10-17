import styled from 'styled-components'

const FilterContainer = styled.div`
  background-color: #ffd700; /* Gold, a tropical color */
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
`
const Filter = ({ filter, handleChange }) => (
  <FilterContainer>
    <p>
      filter shown with <input value={filter} onChange={handleChange} />
    </p>
  </FilterContainer>
)
export default Filter
