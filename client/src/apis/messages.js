// ./src/apis/messages.js
import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getMessages() {
    return apiHelper.get(`/messages`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}