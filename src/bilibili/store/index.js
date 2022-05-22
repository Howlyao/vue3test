import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      username: 'Howlyao',
      img: '/1.jpg',
      level: 'lv2',
      bCoins: 0.0,
      mCoins: 9,
      isVip: true,
      trend: 1,
      subscribe: 19,
      fan: 0,
    }
  },
  getters: {
    getUser: state => {
      return state.user
    },
  
  },
  mutations: {
    // addItem (state, item) {
    //   if (item)
    //     state.items.push(item)
    // }
  },
  actions: {
    // addItem ({commit}, item) {
    //   commit('addItem', item)
    // }
  },
  modules: {
  }
})
