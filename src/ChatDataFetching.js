import React, { useEffect } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'
import API from './api'

export default function ChatDataFetching({
  chats,
  setChats,
  setRoomList,
  setRoomListViewer,
  chatsOfRoom,
  setChatsOfRoom,
  selectedRoom,
}) {
  console.log(chats)
  useEffect(async () => {
    const messages = await API.getMessages()
    setChats(messages)

    function updateRooms() {
      const dupRooms = []
      const rooms = []
      messages.map(chat => dupRooms.push(chat.roomname))
      dupRooms.forEach(element => {
        if (!rooms.includes(element)) {
          rooms.push(element)
        }
      })
      setRoomList(rooms)
      setRoomListViewer(rooms)
    }
    function loadChatsOfRoom() {
      if (!selectedRoom) {
        setChatsOfRoom([])
      } else {
        const messagesOfRoom = messages.filter(
          chat => chat.roomname === selectedRoom
        )
        setChatsOfRoom(messagesOfRoom)
      }
    }

    updateRooms()
    loadChatsOfRoom()
  }, [
    setChats,
    setRoomList,
    setRoomListViewer,
    selectedRoom,
    setChatsOfRoom,
    chats.length,
  ])

  useEffect(() => {
    async function updateChats() {
      // console.log('update')
      const messages = await API.getMessages()
      if (chats.length !== messages.length) {
        setChats(messages)
      }
    }
    const interval = setInterval(updateChats, 100)
    return () => clearInterval(interval)
  })

  return (
    <ChattingWrapper>
      {chatsOfRoom.map((chat, i) => (
        <ChatMessage key={`${i}-chat`}>
          <div>{`User Name :${chat.username}`}</div>
          <div>{`Room Name : ${chat.roomname}`}</div>
          <div>{`Message : ${chat.text}`}</div>
          <div>{`Time : ${chat.getFormattedDate()}`}</div>
        </ChatMessage>
      ))}
    </ChattingWrapper>
  )
}

const ChattingWrapper = styled.div`
  height: 35rem;
  border: solid gray;
  overflow: scroll;
`
const ChatMessage = styled.div`
  margin-top: 0.5rem;
`
