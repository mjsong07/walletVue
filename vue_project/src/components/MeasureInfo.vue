<template>
    <div class="measureInfo" id="measureInfo">
                <div class="head">
                    <h1>最近一次量体时间:{{measureDate}}</h1>
                    <h2>量体师：{{userName}}</h2>
                </div>
                <div class="content">
                    <ul>
                        <li v-for="(item, index) in measureList" :key="index">
                            <p>{{item.name}}</p>
                            <p>{{item.length}}</p>
                        </li> 
                    </ul>
                </div>
            </div>
</template>

<script>
export default {
  name: "measureInfo",
  data() {
    return {
      measureDate: "2019-10-10",
      userName: "张四",
      measureList: [
        { name: "净身高", length: "100.5cm" },
        { name: "后中背", length: "23.5cm" },
        { name: "裤长", length: "32.5cm" },
        { name: "净身高", length: "133.5cm" },
        { name: "净身高", length: "101.5cm" },
        { name: "体重", length: "167.5cm" },
        { name: "净身高", length: "133.5cm" },
        { name: "净身高", length: "101.5cm" },
        { name: "体重", length: "167.5cm" }
      ]
    };
  }
};
</script>
 
<style scoped>
.measureInfo .head{ margin-top: 20px; text-align: left; padding: 0 20px; font-weight: 300; }    
.measureInfo .head h1{ font-size: 16px; }    
.measureInfo .head h2{ font-size: 16px; margin-top: 5px; }    
.measureInfo .content { font-size: 15px; margin-top: 20px;}  
.measureInfo .content ul { display: flex; flex-direction: row; flex-wrap: wrap;}    
.measureInfo .content ul li{  width: 33%; border-right: 1px solid #BCBCBC; line-height: 35px; text-align: left;}    
.measureInfo .content ul li p{  padding: 0px 20px;  }    
.measureInfo .content ul li p:nth-child(1){  background-color: #F2F2F2; color: #666666; }    
.measureInfo .content ul li p:nth-child(2){   }    

</style>
