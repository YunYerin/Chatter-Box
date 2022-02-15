import axios from 'axios'
import { ChatMessage } from './models'

const axiosInstance = axios.create({
  baseURL: 'http://35.225.199.142:4000',
})

export default class API {
  static async sendMessage(username, text, roomname) {
    const { data } = await axiosInstance.post('/api/chats', {
      username,
      text,
      roomname,
    })
    return ChatMessage.fromJson(data)
  }

  static async getMessages() {
    const { data } = await axiosInstance.get('/api/chats')
    const messages = data.data.map(ChatMessage.fromJson)
    return messages
  }
}

API.sendMessage()
