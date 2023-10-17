const Notification = ({ message,error }) => {

  if (message === null && error === null) {
    return null
  }
    const messageStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
      }
      const errorMessageStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
      }

    return (
      <div style= {message ? messageStyle:errorMessageStyle}>
        {message||error}
      </div>
    )
  }
  
  export default Notification

