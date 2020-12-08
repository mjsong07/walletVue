import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/Index.vue'; 
import UserInfo from '../components/UserInfo.vue'; 
import Wallet from '../components/Wallet.vue'; 
import Reg from '../components/Reg.vue';    
import MeasureInfo from '../components/MeasureInfo.vue';    
import Coupon from '../components/Coupon.vue';    
import OrderList from '../components/OrderList.vue';    

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',  
      component: Index , 
    },
    {
      path: '/userInfo',   
      component: UserInfo, 
    },
    {
      path: '/measureInfo',   
      component: MeasureInfo,   
    },
    {
      path: '/reg',   
      component: Reg, 
    },
    {
      path: '/wallet',   
      component: Wallet, 
    }, 
    {
      path: '/coupon',   
      component: Coupon, 
    }, 
    {
      path: '/orderList',   
      component: OrderList,  
    },
  ]
})
