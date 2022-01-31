import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ChatDataFetching() {
  const [chats, setChats] = useState([])

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
  }, [])

  return (
    <div>
      {chats.map((chat, i) => (
        <li key={`${i}-chat`}>
          <div>{chat.username}</div>
          <div>{chat.text}</div>
          <div>{chat.date.toLocaleString('ko-KR')}</div>
        </li>
      ))}
    </div>
  )
}