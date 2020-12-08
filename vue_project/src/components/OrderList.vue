<template>
   <div class="orderList" id="orderList">  <input v-model="test1" />
                <div class="head" @click="testClick">
                订单列表 
                </div>
                <div class="content">
            
                </div>
            </div>
</template>

<script>
export default {
  name: 'OrderList', 
   data () {
    return {
        test1:"ddsdsd"
            }; 
    },  
    methods:{
      testClick:function () {
         this.$router.push('coupon');
      }
    },
     created() {
        console.log('>>>>>> created 1')
    },

     mounted() {
        console.log('>>>>>> mounted 1')
    },
  //    activated() {
  //   windows.console.log('首页被激活');
  // },
    // created:{
    //   windows.console.log("created");
    // }, 
    // mounted:{
    //  windows.console.log("mounted");
    // }
}
</script>
 
<style scoped> 

</style>
