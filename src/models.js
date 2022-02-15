export class ChatMessage {
  constructor(id, roomname, username, text, date) {
    this.id = id
    this.roomname = roomname
    this.username = username
    this.text = text
    this.date = new Date(date)
  }

  static fromJson(chatJsonObj) {
    return new ChatMessage(
      chatJsonObj.id,
      chatJsonObj.roomname,
      chatJsonObj.username,
      chatJsonObj.text,
      chatJsonObj.date
    )
  }

  getFormattedDate() {
    return this.date.toLocaleString('ko-KR')
  }
}
