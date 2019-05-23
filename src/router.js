import Vue from 'vue'
import Router from 'vue-router'
import Payment from './views/Payment.vue'
import Pin from './views/Pin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/pin/registration',
      name: 'pin',
      component: Pin
    }
  ]
})
