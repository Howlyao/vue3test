import { createStore } from 'vuex'

export default createStore({
  state: {
    items: ['first', 'second']
  },
  getters: {
    getItems: state => {
      return state.items
    },
    getItemsLength: (state, getters) => {
      return getters.items.length
    },
    getTodoById: (state) => (id) => {
      return state.items.find(item => item.id === id)
    }
  },
  mutations: {
    addItem (state, item) {
      if (item)
        state.items.push(item)
    }
  },
  actions: {
    addItem ({commit}, item) {
      commit('addItem', item)
    }
  },
  modules: {
  }
})
