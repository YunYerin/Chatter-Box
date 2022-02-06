import React, { useEffect } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'

export default function ChatDataFetching({
  chats,
  setChats,
  setRoomList,
  setRoomListViewer,
  chatsOfRoom,
  setChatsOfRoom,
  selectedRoom,
}) {
  useEffect(() => {
    axios
      .get('http://35.225.199.142:4000/api/chats')
      .then(res => {
        console.log(res.data)
        setChats(res.data.data)
        function updateRooms() {
          const dupRooms = []
          const rooms = []
          res.data.data.map(chat => dupRooms.push(chat.roomname))
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
            const messagesOfRoom = res.data.data.filter(
              chat => chat.roomname === selectedRoom
            )
            setChatsOfRoom(messagesOfRoom)
          }
        }
        updateRooms()
        loadChatsOfRoom()
      })
      .catch(err => {
        console.log(err)
      })
  }, [selectedRoom, setChatsOfRoom, setChats, setRoomList, setRoomListViewer])

  console.log(chatsOfRoom)
  console.log(selectedRoom)

  return (
    <ChattingWrapper>
      {chatsOfRoom.map((chat, i) => (
        <ChatMessage key={`${i}-chat`}>
          <div>{`User Name :${chatsOfRoom.username}`}</div>
          <div>{`Room Name : ${chatsOfRoom.roomname}`}</div>
          <div>{`Message : ${chatsOfRoom.text}`}</div>
          {/* <div>{`Time : ${chat.date.toLocaleString('ko-KR')}`}</div> */}
        </ChatMessage>
      ))}
    </ChattingWrapper>
  )
}

const ChattingWrapper = styled.div`
  height: 30rem;
  border: solid yellow;
  overflow: scroll;
`
const ChatMessage = styled.div`
  margin-top: 0.5rem;
`
