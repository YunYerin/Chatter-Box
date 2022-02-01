import React from 'react'

export default function SetNickName({
  nickName,
  setNickName,
  submitNickName,
  setSubmitNickname,
}) {
  return (
    <div>
      <div>
        <div>My NickName : </div>
        <div>{submitNickName}</div>
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
