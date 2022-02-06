import React from 'react'
import styled from '@emotion/styled'

export default function SetNickName({
  nickName,
  setNickName,
  submitNickName,
  setSubmitNickname,
}) {
  return (
    <div>
      <NickName>
        <div>My NickName : </div>
        <MyNickName>{submitNickName}</MyNickName>
      </NickName>
      <SetNickNameWrapper
        onSubmit={e => {
          e.preventDefault()
          setSubmitNickname(nickName)
          setNickName('')
        }}
      >
        <NickNameInput
          type="text"
          onChange={e => {
            setNickName(e.target.value)
          }}
          value={nickName}
        ></NickNameInput>
        <NickNameSettingButton
          type="submit"
          value="Set My NickName"
        ></NickNameSettingButton>
      </SetNickNameWrapper>
    </div>
  )
}

const NickName = styled.div`
  margin-top: 0.5rem;
  display: flex;
  font-size: 1.2rem;
`
const MyNickName = styled.div`
  font-weight: bold;
  color: #000069;
  margin-left: 0.5rem;
`

const SetNickNameWrapper = styled.form`
  margin-top: 0.2rem;
`
const NickNameInput = styled.input`
  height: 1.5rem;
  font-size: 1rem;
  width: 15rem;
`

const NickNameSettingButton = styled.input`
  height: 2rem;
  font-size: 0.9rem;
  width: 8rem;
`
