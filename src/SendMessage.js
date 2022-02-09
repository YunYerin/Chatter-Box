import React from 'react'
import axios from 'axios'
import styled from '@emotion/styled'

export default function SendMessage({
  message,
  setMessage,
  submitNickName,
  selectedRoom,
  setChats,
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
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  // setInterval(
  //   () =>
  //     axios
  //       .get('http://35.225.199.142:4000/api/chats')
  //       .then(res => {
  //         // console.log(res.data)
  //         setChats(res.data.data)
  //       })
  //       .catch(err => {
  //         console.log(err)
  //       }),
  //   1000
  // )

  function onEnterSendMessage() {
    if (submitNickName.length === 0) {
      alert('Please Write Your NickName')
    } else if (selectedRoom.length === 0) {
      alert('Please Select Room')
    } else if (submitNickName.length === 0 && selectedRoom.length === 0) {
      alert('Please Write Your NickName AND Select Room')
    } else {
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
        <MessageInput
          type="text"
          onChange={e => {
            setMessage(e.target.value)
          }}
          value={message}
        ></MessageInput>
        <SendButton type="submit" value="send message"></SendButton>
      </form>
    </div>
  )
}

const MessageInput = styled.input`
  height: 2rem;
  width: 80%;
  font-size: 1rem;
`

const SendButton = styled.input`
  height: 2.3rem;
  width: 17%;
  margin-left: 0.2rem;
  font-size: 0.8rem;
  font-weight: bold;
`
