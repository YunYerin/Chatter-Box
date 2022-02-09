import React, { useState } from 'react'
import RoomList from './RoomList'
import SendMessage from './SendMessage'
import SetNickName from './SetNickName'
import ChatDataFetching from './ChatDataFetching'
import styled from '@emotion/styled'

export default function ChatterBox() {
  const [nickName, setNickName] = useState('')
  const [submitNickName, setSubmitNickname] = useState('')

  const [roomList, setRoomList] = useState([])
  const [writedRoom, setWritedRoom] = useState('')
  const [selectedRoom, setSelectedRoom] = useState('')
  const [roomListViewer, setRoomListViewer] = useState([])

  const [chats, setChats] = useState([])
  const [chatsOfRoom, setChatsOfRoom] = useState([])

  const [message, setMessage] = useState('')

  // setInterval(() => {
  //   axios
  //     .get('http://35.225.199.142:4000/api/chats')
  //     .then(res => {
  //       setChats(res.data.data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // })

  return (
    <ChatterBoxWrapper>
      <NickNameAndRoomSetting>
        <ChaaterBox>Chatter-Box</ChaaterBox>
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
          roomListViewer={roomListViewer}
          setRoomListViewer={setRoomListViewer}
        />
      </NickNameAndRoomSetting>
      <Chatting>
        <ChatDataFetching
          chats={chats}
          setChats={setChats}
          selectedRoom={selectedRoom}
          roomList={roomList}
          setRoomList={setRoomList}
          setRoomListViewer={setRoomListViewer}
          chatsOfRoom={chatsOfRoom}
          setChatsOfRoom={setChatsOfRoom}
        />
        <SendMessage
          message={message}
          setMessage={setMessage}
          submitNickName={submitNickName}
          selectedRoom={selectedRoom}
          setChats={setChats}
        />
      </Chatting>
    </ChatterBoxWrapper>
  )
}

const ChaaterBox = styled.div`
  font-size: 2rem;
  font-weight: bold;
`

const ChatterBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const NickNameAndRoomSetting = styled.div`
  flex: 4;
`

const Chatting = styled.div`
  flex: 8;
  border: solid black;
  margin-right: 1rem;
`
