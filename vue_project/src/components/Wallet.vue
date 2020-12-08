<template>
  <div class="wallet" id="wallet">
                <div class="head">
                    <h1>总余额</h1>
                    <p> <img src="../assets/account.png" /><span>{{amount}}</span></p>
                </div>
               
                <div class="content">
                    <h2>余额明细</h2>
                    <ul>
                        <li v-for="(item, index) in detailList" :key="index" >
                          <template v-if="item.type == 1" >
                                <img src="../assets/rebate.png" /> 
                          </template>
                          <template v-else>
                                <img src="../assets/cost.png" /> 
                          </template> 
                             <p> 
                                <span v-if="item.type == 1">返利成功</span>
                                <span v-if="item.type == 2">消费成功</span>
                                <b :class="item.type == 1 ? 'green':'red'">{{(item.type == 1 ? '+':'-' ) + " ¥"+  parseFloat(Math.abs(item.money)).toFixed(2)}} </b>  
                             </p>
                             <span>{{item.date}}<br/>{{item.time}}</span>
                         </li>  
                    </ul>
                </div>
            </div>
</template>

<script>
export default {
  name: "Wallet",
  data() {
    return {
      amount: "2322.00",
      detailList: [
        { type: 1, money: 200.1, date: "2019-09-10", time: "13:20:20" },
        { type: 2, money: -200.002, date: "2019-03-12", time: "1:20:10" },
        { type: 2, money: -2342.23, date: "2019-10-09", time: "09:20:20" },
        { type: 1, money: 200.0, date: "2019-10-10", time: "13:20:20" }
      ]
    };
  }
};
</script>
 
<style scoped> 
.wallet .head{ margin-top: 20px;  }  
.wallet .head h1{  text-align: center; font-size: 12px; color: #BCBCBC; }  
.wallet .head p{ text-align: center; font-size: 30px; margin-top: 15px; line-height: 30px; }   
.wallet .head p img{   height: 20px; width: 20px; }   
.wallet .head p span{margin-left: 10px;  }    
.wallet .content { font-size: 15px;}
.wallet .content h2{  font-size: 14px; border-bottom: 1px solid #BCBCBC;padding: 10px;}  
.wallet .content ul li{ display: flex; flex-direction: row;   padding: 0px; border-bottom: 1px solid #BCBCBC; }  
.wallet .content ul li img{ width: 25px; height: 25px; margin-top: 5px; margin-left: 10px;}  
.wallet .content ul li p{ flex: 1; padding-left: 30px; }   
.wallet .content ul li p b{  display: block;}   
.wallet .content ul li span{ width: 110px; text-align: center; color: #999; }  
</style>
