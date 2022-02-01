import React from 'react'

export default function SendMessage({ message, setMessage }) {
  // const [message, setMessage] = useState('')
  // function submit() {
  //   axios({
  //     method: 'post',
  //     url: 'url',
  //     data: {
  //       firstName: 'Fred',
  //       lastName: 'Flintstone'
  //     }
  //   });

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          console.log(message)
          console.log(new Date())
          setMessage('')
        }}
      >
        <input
          type="text"
          onChange={e => {
            setMessage(e.target.value)
          }}
          value={message}
        ></input>
        <input type="submit" value="send message"></input>
      </form>
    </div>
  )
}
