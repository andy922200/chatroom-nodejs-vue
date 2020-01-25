// ./src/apis/users.js
import { apiHelper } from '../utils/helpers'

export default {
  signIn({ email, password }) {
    return apiHelper.post(`/signIn`, {
      email,
      password
    })
  }
}