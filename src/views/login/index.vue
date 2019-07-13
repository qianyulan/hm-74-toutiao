<template>
  <div class="login-container">
    <el-card class="login-box">
      <img src="../../assets/images/logo_index.png" alt />
      <!-- 登录表单 -->
      <!-- 指定校验规则 -->
      <el-form ref="loginForm" :status-icon="true" :model="loginForm" :rules="loginRules">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
      <!-- 输入验证码 -->
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:280px"></el-input>
      <!-- 发送验证码 -->
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
      <!-- 合同条约 -->
        <el-form-item>
         <el-checkbox>我已经阅读并同意<span>用户协议</span> 和<span>隐私条款</span></el-checkbox>
        </el-form-item>
      <!-- 登陆按钮 -->
        <el-form-item>
          <el-button style="width:100%" type="primary" @click="login()">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    // 校验手机号
    const checkMobile = (rule, value, callback) => {
      // 校验逻辑   把value拿出来进行手机号的格式校验
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不正确'))
      }
    }
    return {
      // 表单数据对象
      loginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      // 表单验证规则对象
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入6位数字', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // 对整个表单进行校验
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // 提交登录请求  axios是基于primise封装的 post() 返回值一个promise对象
          this.$http
            .post(
              'authorizations',
              this.loginForm
            )
            .then(res => {
              // res 是 响应对象  包含 后台返回的数据 res.data
              console.log(res.data)
              console.log(res.data.data)// 保存了token信息
              // 1. 跳转到首页
              // TODO 2. 保存用户的信息  用来判断登录的状态
              // session  基于cookie 适用于前后端域名相同的网页开放
              // token  基于本地存储 可以在不同域名的前后端使用 是使用了算法进行加密的字符创  而这字符创可以作为唯一的标识  app ios 用的比较多
              // 而本地存储有三个
              // cookie  域名相同的前后端开关
              // sessionStorage   关闭浏览器  会话状态结束
              // localStorage     关闭浏览器  会话状态还在
              // sessionStorage.setItem(key,value) 存储数据 value是字符串
              // sessionStorage.getItem(key)获取数据
              // sessionStorage.removeItem(key)删除数据
              // sessionStorage.clear()清除所有数据
              window.sessionStorage.setItem('hm-74-toutiao', JSON.stringify(res.data.data))
              this.$router.push('/')
            })
            .catch(() => {
              // 提示
              this.$message.error('手机号或验证码错误')
            })
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.login-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  // cover 铺面容器 多余的裁剪   contain 在容器内容完全显示图片
  // 背景图定位 / 背景图尺寸
  background: url(../../assets/images/login-in.jpg) no-repeat center / cover;
  .login-box {
    width: 500px;
    height: 330px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(225, 225, 225, .1);
    img {
      display: block;
      width: 200px;
      margin: 10px auto;
    }
  }
}
</style>
