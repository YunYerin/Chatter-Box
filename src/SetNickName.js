import React, { useState } from 'react'

export default function SetNickName() {
  const [nickName, setNickName] = useState('')
  const [submitNickName, setSubmitNickname] = useState('')

  return (
    <div>
      <div>
        <div>{`My NickName : ${submitNickName}`} </div>
        {/* <div>{nickName}</div> */}
      </div>
      <form
        onSubmit={e => {
          e.preventDefault()
          setSubmitNickname(nickName)
          setNickName('')
        }}
      >
        <input
          type="text"
          onChange={e => {
            setNickName(e.target.value)
          }}
          value={nickName}
        ></input>
        <input type="submit" value="Set My NickName"></input>
      </form>
    </div>
  )
}
