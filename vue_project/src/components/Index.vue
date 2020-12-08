<template>
  <div class="index" id="index"> 
            <div class="head">
                <ul>
                    <li class="baseInfo"  @click="userInfo">
                        <img src="../assets/pic.png" />
                        <span>{{phone}}</span>
                         <a class="more">></a> 
                    </li>
                    <li class="wallet"  @click="wallet">
                        <p>余额<span>{{amount}}</span>元</p><a class="more">></a>
                    </li>
                </ul>
            </div>
           
            <div class="content">
               
                <h1>我的会员<span>My Member</span></h1>
                <ul> 
                    <li @click="orderList"> <img src="../assets/pic.png" /><span>我的定制</span> </li>
                    <li @click="coupon"> <img src="../assets/pic.png" /><span>优惠券</span> </li>
                    <li @click="measureInfo"> <img src="../assets/pic.png" /><span>量体数据</span> </li>
                    <li @click="userInfo"> <img src="../assets/pic.png" /><span>个人资料</span> </li>
                </ul>
            </div> 
        </div>
</template>
<script> 

import Storage from '../assets/js/storage'
export default {
  name: 'Index',  
  data () {  
    return { 
          userName: 'XXX',
          phone: '13444444440', 
          amount: "23220.00", 
          test1:"xxx"
    };
  }, 
    created:function(){
      // debugger;
      // console.log(Storage);
        //    this.$confirm({ 
        //         title: '请先注册会员或绑定会员', 
        //         okText: '注册/绑定',
        //          style :"top: 180px;",
        //         okType: 'danger',
        //         cancelText: '取消',
        //         onOk() {
        //             console.log('OK');
        //         },
        //         onCancel() {
        //             console.log('Cancel');
        //         },
        //     });
      },
    methods: {
        wallet :function() {  
           this.$router.push('wallet');
        }, 
        orderList :function() { 
           this.$router.push('orderList');
        },
        coupon :function() { 
           this.$router.push('coupon');
        },
        measureInfo :function() {
           this.$router.push('measureInfo');
        },
        userInfo :function() {
           this.$router.push('userInfo');
        },
          showDeleteConfirm() {
          
         },
    },  
} 

</script>
<style scoped> 
.index .head{ margin-top: 20px; background-color: rgb(235, 232, 232); font-size: 16px;}  
.index .head ul li{ display: flex; flex-direction: row;   padding: 10px 30px; border-bottom: 1px solid #BCBCBC; }  
.index .head .baseInfo{   height: 90px; line-height: 60px; } 
.index .head .baseInfo img { height: 70px; width: 70px; border-radius: 40px; border: 1px solid #BCBCBC; }    
.index .head .baseInfo span { flex: 1; margin-left: 25px;}    
.index .head .baseInfo .more{ width: 30px; display: block;}   
.index .head .wallet{  height: 50px; line-height: 30px; } 
.index .head .wallet p{  flex: 1;} 
.index .head .wallet span{ color: red; margin: 0 10px; } 
.index .head .wallet .more{ width: 30px; display: block;} 
.index .content {  font-size: 16px; } 
.index .content h1{  font-size: 18px; border-bottom: 1px solid #BCBCBC;padding: 10px;} 
.index .content h1 span{  font-size: 15px; margin-left: 10px; } 
.index .content ul {display: flex; flex-direction: row; padding: 20px 10px; border-bottom: 1px solid #BCBCBC;}
.index .content ul li {  line-height: 40px; display: flex; flex-direction: column; flex: 1; text-align: center;} 
.index .content ul li img {  width: 40px; height: 40px; border-radius: 20px; display: block; align-self: center; }  
.ant-modal{top: 200px;}
.ant-modal-confirm .ant-modal-confirm-btns{ float: none; text-align: center;}
</style>
