<template>
<div class="login-contents">
   <el-card class="login-box">
    <img src="../../assets/images/logo_index.png" alt="">
    <input type="text" class="input-last">
    <input type="text" class="input-next">
    <input type="text" class="input-next-next" placeholder="发送验证码">
    <div class="input-box">
        <input type="checkbox" class="input-checkbox">我已阅读并同意<a href="#">用户协议</a>和<a href="#">隐私条款</a>
    </div>
    <a href="#" class="login-sub">登录</a>
   </el-card>
</div>

</template>

<script>
export default {

}
</script>

<style scoped lang='less'>
 .login-contents{
     width: 100%;
     height: 100%;
     position: absolute;
     left: 0;
     top: 0 ;
     background:url(../../assets/images/login-in.jpg)
     }
   .login-box{
       width: 500px;
       height: 300px;
       position: absolute;
       left: 50%;
       top: 50% ;
       transform: translate(-50%,-50%);
       background-color: rgba(225, 225, 225, .1);
       }
       img{
        display: block;
        width: 200px;
        margin: 10px auto;
       }
       .input-last{
        width: 450px;
        height: 30px;
       }
       .input-next{
        width: 300px;
        height: 30px;
        position: absolute;
        left: 4%;
        top: 50% ;
       }
       .input-next-next{
           width: 100px;
           height: 30px;
           position: absolute;
           left: 74%;
           top: 50% ;
           text-align: center;
       }
       .login-sub{
           width: 455px;
           height: 40px;
           background-color: #3F9CFE;
           position: absolute;
           left: 50%;
           top: 88% ;
           transform: translate(-50%,-50%);
           font-size:18px;
           color: #fff;
           text-decoration: none;
           border-radius: 5px;
           text-align: center;
           line-height: 40px;
       }
       .input-box{
           position: absolute;
           left: 4%;
           top: 70% ;
           color: #fff;
       }

</style>
