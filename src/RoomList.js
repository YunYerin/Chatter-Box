import React, { useState } from 'react'

export default function RoomList() {
  const [roomList, setRoomList] = useState(['Yungooso'])
  const [room, setRoom] = useState('')

  return (
    <div>
      <div>
        {roomList.map((el, i) => (
          <li key={`${i}-room-number`}>{el}</li>
        ))}
      </div>
      <form
        onSubmit={e => {
          e.preventDefault()
          setRoomList([...roomList, room])
          setRoom('')
        }}
      >
        <input
          type="text"
          onChange={e => {
            setRoom(e.target.value)
          }}
          value={room}
        ></input>
        <input type="submit" value="방만들기"></input>
      </form>
    </div>
  )
}
