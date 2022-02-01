import React, { useState } from 'react'
import RoomList from './RoomList'
import SendMessage from './SendMessage'
import SetNickName from './SetNickName'
import ChatDataFetching from './ChatDataFetching'

export default function ChatterBox() {
  const [nickName, setNickName] = useState('')
  const [submitNickName, setSubmitNickname] = useState('')

  const [roomList, setRoomList] = useState(['Yungooso'])
  const [writedRoom, setWritedRoom] = useState('')
  const [selectedRoom, setSelectedRoom] = useState('')

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
        writedRoom={writedRoom}
        setWritedRoom={setWritedRoom}
        selectedRoom={selectedRoom}
        setSelectedRoom={setSelectedRoom}
      />
      <ChatDataFetching chats={chats} setChats={setChats} />
      <SendMessage
        message={message}
        setMessage={setMessage}
        submitNickName={submitNickName}
        selectedRoom={selectedRoom}
      />
    </div>
  )
}
