import Vue from 'vue'
import Vuex from 'vuex'
import cart from '@/store/moudules/cart.js'
import address from '@/store/moudules/address.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        cart,
        address
    }
})