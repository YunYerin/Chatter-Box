import React from 'react'

export default function RoomList({
  roomList,
  setRoomList,
  writedRoom,
  setWritedRoom,
  selectedRoom,
  setSelectedRoom,
}) {
  return (
    <div>
      <div>
        {roomList.map((room, i) => (
          <div
            onClick={() => {
              setSelectedRoom(room)
              console.log(selectedRoom)
            }}
            key={`${i}-room-number`}
          >
            {room}
          </div>
        ))}
      </div>
      <form
        onSubmit={e => {
          e.preventDefault()
          setRoomList([...roomList, writedRoom])
          setWritedRoom('')
        }}
      >
        <input
          type="text"
          onChange={e => {
            setWritedRoom(e.target.value)
          }}
          value={writedRoom}
        ></input>
        <input type="submit" value="방만들기"></input>
      </form>
    </div>
  )
}
