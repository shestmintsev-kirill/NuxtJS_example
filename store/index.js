export const state = () => ({
  token: false
})

export const getters = {
  hasToken: state => !!state.token
}

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  }
}

export const actions = {
  nuxtServerInit() {
    // eslint-disable-next-line no-console
    console.log('next started')
  },
  login({ commit }) {
    commit('SET_TOKEN', true)
  },
  logout({ commit }) {
    commit('SET_TOKEN', false)
  }
}
