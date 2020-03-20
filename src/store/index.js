import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations
    // getters 类似于computed 计算属性，用于计算state中的值，防止重复运算
})