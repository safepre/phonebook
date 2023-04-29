import Part from './Part'
const Persons = ({persons,filter,removePerson}) =>
(
    
    <>
        {persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
        .map(({name,number,id}) => (
        <Part 
            key = {id} 
            name = {name} 
            number = {number} 
            removePerson = {removePerson(id,name)} 
            />
        ))}
    </>
)

export default Persons