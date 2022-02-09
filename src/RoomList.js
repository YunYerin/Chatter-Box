import React from 'react'
import styled from '@emotion/styled'

export default function RoomList({
  roomList,
  writedRoom,
  setWritedRoom,
  selectedRoom,
  setSelectedRoom,
  roomListViewer,
  setRoomListViewer,
}) {
  return (
    <div>
      <Rooms>
        <div>Room Name :</div>
        <SelectRoom>{selectedRoom}</SelectRoom>
      </Rooms>
      <RoomListWrapper>
        {roomListViewer.map((room, i) => (
          <RoomName
            onClick={() => {
              setSelectedRoom(room)
            }}
            key={`${i}-room-number`}
          >
            {room}
          </RoomName>
        ))}
      </RoomListWrapper>
      <SetRoomNameWrapper
        onSubmit={e => {
          e.preventDefault()
          setRoomListViewer([...roomList, writedRoom])
          setWritedRoom('')
        }}
      >
        <RoomNameInput
          type="text"
          onChange={e => {
            setWritedRoom(e.target.value)
          }}
          value={writedRoom}
        ></RoomNameInput>
        <RoomNameSettingButton
          type="submit"
          value="방만들기"
        ></RoomNameSettingButton>
      </SetRoomNameWrapper>
    </div>
  )
}

const Rooms = styled.div`
  margin-top: 0.5rem;
  display: flex;
  font-size: 1.2rem;
`

const SelectRoom = styled.div`
  font-weight: bold;
  color: #000069;
  margin-left: 0.5rem;
`

const RoomListWrapper = styled.div`
  width: 23rem;
  height: 10rem;
  border: solid;
  margin-top: 0.2rem;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`
const RoomName = styled.div`
  height: 1rem;
  width: auto;
  padding: 0.15rem;
  padding-left: 0.5rem;
  font-size: 1rem;
  border: solid 0.01rem;
  border-radius: 0.2rem;
  margin-top: 0.3rem;
  cursor: pointer;
`

const SetRoomNameWrapper = styled.form`
  margin-top: 0.2rem;
  display: flex;
`

const RoomNameInput = styled.input`
  height: 1.5rem;
  font-size: 1rem;
  width: 15rem;
`

const RoomNameSettingButton = styled.input`
  height: 2rem;
  font-size: 0.9rem;
  width: 8rem;
`
