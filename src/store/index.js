

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import particles from './particles'
import home from './home'
import shop from './shop'

const store = new Vuex.Store({
    modules:{
        particles,home,shop
    }
})

export default store