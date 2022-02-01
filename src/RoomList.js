import React from 'react'

export default function RoomList({ roomList, setRoomList, room, setRoom }) {
  return (
    <div>
      <div>
        {roomList.map((el, i) => (
          <button key={`${i}-room-number`}>{el}</button>
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
