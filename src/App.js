import React from 'react'
import RoomList from './RoomList'
import SendMessage from './SendMessage'
import SetNickName from './SetNickName'
import ChatDataFetching from './ChatDataFetching'

export default function ChatterBox() {
  return (
    <div>
      <div>Chatter-Box</div>
      <SetNickName />
      <RoomList />
      <ChatDataFetching />
      <SendMessage />
    </div>
  )
}
