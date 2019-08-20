import Vue from 'vue'
import Vuex from 'vuex'
import cart from '@/store/moudules/cart.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        cart
    }
})