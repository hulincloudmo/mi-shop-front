import Vue from 'vue'
import Vuex from 'vuex'
import cart from '@/store/moudules/cart.js'
<<<<<<< HEAD
=======
import address from '@/store/moudules/address.js'
>>>>>>> msqx-dev

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
<<<<<<< HEAD
        cart
=======
        cart,
        address
>>>>>>> msqx-dev
    }
})