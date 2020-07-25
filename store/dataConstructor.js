import { createNamespacedHelpers } from 'vuex'
import jsonData from '@/assets/data/doudai.json'

export const dataMapper = createNamespacedHelpers('dataConstructor')

export default {
  state() {
    return {
      data: '',
    }
  },
  mutations: {
    SET_DATA(state, name) {
      if (name === '同大硬式') {
        state.data = jsonData
      }
    },
  },
  actions: {
    fetchData({ commit }, { name }) {
      commit('SET_DATA', name)
    },
  },
  getters: {
    getData(state) {
      return state.data
    },
  },
}
