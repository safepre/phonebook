const PersonForm = ({handle,name,number,handleChangeName,handleChangeNumber}) =>
(
<form onSubmit={handle}>
    <div>
        name:<input value = {name}
        onChange={handleChangeName}/>
    </div>
    <div>
        number: <input value={number} 
        onChange={handleChangeNumber}/></div>
    <div>
        <button type="submit">add</button>
    </div>
</form>
)
export default PersonForm