<template>
    <div class="userInfo" id="userInfo">
                <div class="head">
                      <img src="../assets/pic.png" /> 
                </div> 
                <div class="content">
                    <ul>
                        <li >
                           <b>姓名</b><span>{{userName}}</span>
                         </li>
                         <li >
                            <b>手机号</b><span>{{phone}}</span>
                        </li> 
                        <li >
                            <b>性别</b><span>{{gender}}</span>
                        </li> 
                        <li >
                            <b>生日</b><span>{{birthday}}</span>
                        </li> 
                        <li >
                            <b>职业</b><span>{{occupation}}</span>
                        </li> 
                        <li >
                            <b>所属门店</b><span>{{shopName}}</span>
                        </li> 
                        <li >
                            <b>专属导购</b><span>{{employName}}</span>
                        </li> 
                        <li >
                            <b>微信号</b><span>{{wechat}}</span>
                        </li> 
                    </ul>
                </div>
            </div>
</template>

<script> 
export default {
  name: "UserInfo",
  data() {
    return { 
      userName: "张三",
      phone: "13411111111",
      gender: "女",
      birthday: "1987-02-10",
      occupation: "老师",
      shopName: "店铺xxx",
      employName: "李四",
      wechat: "mjkk22222"
    };
  }
};
</script>
 
<style scoped> 
.userInfo .head{ margin-top: 20px; text-align: center; }    
.userInfo .head img{   height: 100px; width: 100px; border-radius: 50px;  margin: 0 auto; }    
.userInfo .content { font-size: 15px; margin-top: 20px;}  
.userInfo .content ul li{ display: flex; flex-direction: row;   padding: 10px 20px; border-bottom: 1px solid #BCBCBC; }    
.userInfo .content ul li span{ width: 80px; text-align: left; color: #008000; }   
.userInfo .content ul li b{ font-size: 14px; font-weight: 200; color: #999; width: 100px; }  
</style>
