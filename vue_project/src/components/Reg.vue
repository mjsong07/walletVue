<template>
   <div class="reg" id="reg">
        <div class="head">
            <div class="imgInfo"><img :src="headImgUrl"  /></div>
            <h2>{{userName}}</h2>
        </div>
        <div class="content">
            <ul>
                <li><span>手机号</span><input placeholder="请输入手机号" v-model="phone" /></li>
                <li><span>验证码</span><input placeholder="请输入6位验证码" /><a :class="{cur : vcodeCur}" class="getCode" @click='getVCode'>{{vcodeMsgShow}}</a></li>
            </ul> 
            <div class="btn" @click='memberJoin'><a>加入/绑定会员</a></div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Reg",
  data() {
    return {
      headImgUrl: "../assets/pic.png",
      userName: "XXX",
      phone: "",
      vcode: "",
      vcodeCur: false,
      vcodeMsgShow: "获取验证码",
      countDownTotal: 5,
      countDownCnt: 0,
      isRunning: false,
      intervalKey: null
    };
  },
  methods: {
    getVCode: function() {
      this.vcodeCur = true;
      if (!this.isRunning) {
        this.isRunning = true;
        this.countDownCnt = this.countDownTotal;
        this.intervalKey = setInterval(this.startCountDown, 1000);
      }
    },
    startCountDown: function() {
      this.countDownCnt--;
    },
    memberJoin: function() {
      alert("请求后台");
      window.location.href = "index.html";
    }
  },
  watch: {
    countDownCnt: function() {
      this.vcodeMsgShow = "获取验证码(" + this.countDownCnt + ")";
      if (this.countDownCnt < 0) {
        this.vcodeMsgShow = "获取验证码";
        this.vcodeCur = false;
        clearInterval(this.intervalKey);
        this.isRunning = false;
      }
    }
  }
};
</script>


<style scoped>  
.reg .head{ display: flex; flex-direction: column;margin-top: 20px;} 
.reg .head .imgInfo{ text-align: center;} 
.reg .head .imgInfo img { height: 100px; width: 100px; border-radius: 50px;}   
.reg .head h2{ text-align: center;font-size: 15px; margin-top: 10px;} 
.reg .content { margin-top: 20px; font-size: 14px; padding: 30px; } 
.reg .content ul li { border-bottom: 1px solid #BCBCBC; line-height: 45px; display: flex; flex-direction: row;} 
.reg .content ul li span { color: #000; width: 50px;} 
.reg .content ul li input {  margin-left: 20px; font-size: 18px; flex:1;} 
.reg .content ul li a { color: red;   border-left: 1px solid rgb(223, 221, 221);  line-height: 30px; height: 25px; padding-left: 10px;  margin-top: 10px;  width: 110px; text-align: center; } 
.reg .content ul li a.getCode {padding: 0; line-height: 20px; height: 20px;margin-left: 10px; } 
.reg .content ul li a.getCode.cur { color: #999; background-color: #fff; border: 1px solid #999; }  
.reg .content .btn { width: 100%; text-align: center; margin-top: 20px; } 
.reg .content .btn  a{  background-color: #008000; color: #fff;  display: block; padding: 10px; margin: 10px 0; } 
</style>
