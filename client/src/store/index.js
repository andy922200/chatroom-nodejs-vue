import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from '../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.isAuthenticated = true
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data, statusText } = await usersAPI.getCurrentUser()
        if (statusText !== 'OK') {
          throw new Error(statusText)
        }
        // change the state by commit and the response
        commit('setCurrentUser', {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          isAdmin: data.user.isAdmin
        })
        return true
      } catch (err) {
        console.log('error', err)
        return false
      }
    }
  },
  modules: {
  }
})
