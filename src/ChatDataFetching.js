import React, { useEffect } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'
import { set } from 'lodash'

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
        // console.log(res.data)
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
  }, [setChats, setRoomList, setRoomListViewer, selectedRoom, setChatsOfRoom])

  // useEffect(() => {
  //   axios
  //     .get('http://35.225.199.142:4000/api/chats')
  //     .then(res => {
  //       setInterval(() => {
  //         if (chats.length !== res.data.data.length) {
  //           setChats(res.data.data)
  //         }
  //       }, 500)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }, [chats.length, setChats])

  useEffect(() => {
    const fetchData = setInterval(() => {
      console.log('setInteral 실행')
      axios.get('http://35.225.199.142:4000/api/chats').then(res => {
        if (chats.length !== res.data.data.length) {
          // console.log(chats, res.data.data)
          setChats(res.data.data)
        }
      })
    })
    return () => {
      clearInterval(fetchData)
    }
  }, [])

  return (
    <ChattingWrapper>
      {chatsOfRoom.map((chat, i) => (
        <ChatMessage key={`${i}-chat`}>
          <div>{`User Name :${chat.username}`}</div>
          <div>{`Room Name : ${chat.roomname}`}</div>
          <div>{`Message : ${chat.text}`}</div>
          <div>{`Time : ${chat.date.toLocaleString('ko-KR')}`}</div>
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
