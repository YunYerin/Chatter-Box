import React, { useState } from 'react'

export default function SendMessage() {
  const [message, setMessage] = useState('')
  const [date, setDate] = useState('')
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
          // submit()
          setMessage('')
        }}
      >
        <input
          type="text"
          onChange={e => {
            setMessage(e.target.value)
            setDate(new Date())
          }}
          value={message}
        ></input>
        <input type="submit" value="send message"></input>
      </form>
    </div>
  )
}
