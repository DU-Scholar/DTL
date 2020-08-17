import { createNamespacedHelpers } from 'vuex'

import albatorosu from '@/assets/data/albatorosu.json'
import cosmos from '@/assets/data/cosmos.json'
import cream from '@/assets/data/cream.json'
import doublefault from '@/assets/data/doublefault.json'
import doudai from '@/assets/data/doudai.json'
import etoranze from '@/assets/data/etoranze.json'
import flyspec from '@/assets/data/flyspec.json'
import green from '@/assets/data/green.json'
import inperiaru from '@/assets/data/inperiaru.json'
import lemon from '@/assets/data/lemon.json'
import novis from '@/assets/data/novis.json'
import peanuts from '@/assets/data/peanuts.json'
import regiena from '@/assets/data/regiena.json'
import witty from '@/assets/data/witty.json'

export const dataMapper = createNamespacedHelpers('dataConstructor')

export default {
  state() {
    return {
      data: '',
    }
  },
  mutations: {
    SET_DATA(state, name) {
      if (name === 'アルバトロス') {
        state.data = albatorosu
      }
      if (name === 'コスモス') {
        state.data = cosmos
      }
      if (name === 'クリーム') {
        state.data = cream
      }
      if (name === 'ダブルフォルト') {
        state.data = doublefault
      }
      if (name === '同大硬式') {
        state.data = doudai
      }
      if (name === 'エトランゼ') {
        state.data = etoranze
      }
      if (name === 'フライスペック') {
        state.data = flyspec
      }
      if (name === 'グリーン') {
        state.data = green
      }
      if (name === 'インペリアル') {
        state.data = inperiaru
      }
      if (name === 'レモン') {
        state.data = lemon
      }
      if (name === 'ノービス') {
        state.data = novis
      }
      if (name === 'ピーナッツ') {
        state.data = peanuts
      }
      if (name === 'レジーナ') {
        state.data = regiena
      }
      if (name === 'うぃってぃー') {
        state.data = witty
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
