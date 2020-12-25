<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <el-input v-model="username" placeholder="请输入内容"></el-input>
      <el-input v-model="password" placeholder="请输入内容"></el-input>

      <el-button type="primary" @click="submitForm()">登录</el-button>

      <p class="login-tips">Tips : 用户名和密码随便填。</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
        username: "18828289383",
        password: "123123",
      rules: {},
    };
  },
  methods: {
    submitForm() {
      console.log("22222");
      let params = {
        email: this.username,
        password: this.password,
      };
      console.log(this.username,);
      this.$http.post("api/account/login", params).then((res) => {
          console.log(res);
        if (res.code == "200") {
          this.$message.success("登录成功");
          localStorage.setItem("ms_username", res.data.supplierName); //登录成功显示信息在页面上（比如某某某用户名）
          this.$store.commit("setToken", res.data.token); // 将token存在vuex
          localStorage.setItem("setToken", res.data.token); //把vuex的token值存在localStorage防止刷新之后数据丢失
        }
        this.url = res.url;
        console.log(res);
      });
    },
  },
};
</script>