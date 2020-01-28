// ./src/apis/admin.js
import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getUsers() {
    return apiHelper.get(`/admin/users`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  putRole({ userId }) {
    return apiHelper.put(`/admin/users/${userId}/put-role`, {}, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}