import React, { useState } from 'react'
import RoomList from './RoomList'
import SendMessage from './SendMessage'
import SetNickName from './SetNickName'
import ChatDataFetching from './ChatDataFetching'

export default function ChatterBox() {
  const [nickName, setNickName] = useState('')
  const [submitNickName, setSubmitNickname] = useState('')

  const [roomList, setRoomList] = useState(['Yungooso'])
  const [room, setRoom] = useState('')

  const [chats, setChats] = useState([])

  const [message, setMessage] = useState('')

  return (
    <div>
      <div>Chatter-Box</div>
      <SetNickName
        nickName={nickName}
        setNickName={setNickName}
        submitNickName={submitNickName}
        setSubmitNickname={setSubmitNickname}
      />
      <RoomList
        roomList={roomList}
        setRoomList={setRoomList}
        room={room}
        setRoom={setRoom}
      />
      <ChatDataFetching chats={chats} setChats={setChats} />
      <SendMessage message={message} setMessage={setMessage} />
    </div>
  )
}
