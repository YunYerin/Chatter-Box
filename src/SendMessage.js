import React from 'react'
import axios from 'axios'

export default function SendMessage({
  message,
  setMessage,
  submitNickName,
  selectedRoom,
}) {
  function onSendMessage() {
    axios
      .post('http://35.225.199.142:4000/api/chats', {
        username: submitNickName,
        text: message,
        roomname: selectedRoom,
      })
      .then(function (response) {
        console.log(response)
        window.location.reload()
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  function onEnterSendMessage() {
    if (submitNickName.length === 0) {
      alert('Please Write Your NickName')
    } else if (selectedRoom.length === 0) {
      alert('Please Select Room')
    } else if (submitNickName.length === 0 && selectedRoom.length === 0) {
      alert('Please Write Your NickName AND Select Room')
    } else {
      console.log(submitNickName)
      console.log(`username type: ${typeof submitNickName}`)
      console.log(message)
      console.log(`message type: ${typeof message}`)
      console.log(selectedRoom)
      console.log(`roomname type: ${typeof selectedRoom}`)
      onSendMessage()
      setMessage('')
    }
  }

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          onEnterSendMessage()
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
