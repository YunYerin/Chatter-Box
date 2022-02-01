import React, { useEffect } from 'react'
import axios from 'axios'

export default function ChatDataFetching({ chats, setChats }) {
  useEffect(() => {
    axios
      .get('http://35.225.199.142:4000/api/chats')
      .then(res => {
        console.log(res.data)
        setChats(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [setChats])

  return (
    <div>
      {chats.map((chat, i) => (
        <li key={`${i}-chat`}>
          <div>{`User Name :${chat.username}`}</div>
          <div>{`Room Name : ${chat.roomname}`}</div>
          <div>{`Message : ${chat.text}`}</div>
          <div>{`Time : ${chat.date.toLocaleString('ko-KR')}`}</div>
        </li>
      ))}
    </div>
  )
}
