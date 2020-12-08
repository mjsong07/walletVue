<template>
  <div id="app"> xxxxx 
  <navigation>
    <router-view ></router-view>  
  </navigation>
  </div>
</template>
<script> 

export default {
  name: 'app',
  components: {
     
  },
  // mounted() {
  //   this.test();
  // },
  // methods:{  
  //   async test(){
  //     // await testapi1();
  //     // console.log('testapi1 end');
  //     // await testapi2();
  //     // console.log('testapi2 end');
  //   },  
  //   testapi1(){  
  //     console.log("xxxx")
  //     console.log('testapi1 start');  
  //     setTimeout(() => {  
  //           // console.log('testapi1 data')  ;
  //       }, 1500); 
  //   },  
  //   // testapi2(){
  //   //   console.log('testapi2 start');  
  //   //     setTimeout(() => {  
  //   //       //  console.log('testapi2 data');  
  //   //     }, 1500);  
  //   // }  
  // }
}
</script>

<style>
html {height: 100%;} 
body,dl,dt,dd,ul,ol,li,p,h1,h2,h3,h4{ margin: 0; padding: 0} 
body{ font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;}  
html, body, form, fieldset, p, div, h1, h2, h3, h4, h5, h6 {  -webkit-text-size-adjust:100%; -ms-text-size-adjust: 100%; text-size-adjust: 100%;} 
img{  vertical-align: middle;} 
ul{ list-style: none;}
input,textarea { border: 0; -webkit-appearance: none; }  
div {  -webkit-touch-callout: none;  } 
.green { color: #008000;} 
.red { color: rgb(219, 70, 70);} 
</style>
