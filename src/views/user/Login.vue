<template>
  <div class="login">
    <h1 class="login-title">模板系统</h1>
    <div class="account-content">
      <a-row>
        <a-col :span="24">
          <a-input v-model="userName" placeholder="请输入用户名" @pressEnter="login"><a-icon slot="prefix" type="user" /></a-input>
        </a-col>
      </a-row>
      <a-col :span="24">
        <a-input
          v-model="password"
          placeholder="请输入密码"
          type="password"
          @pressEnter="login"
          ><a-icon slot="prefix" type="lock"
        /></a-input>
      </a-col>
      <a-row>
        <a-col :span="24"
          ><a-button
            type="primary"
            size="large"
            @click="login"
            style="width: 100%"
            >登录</a-button
          ></a-col
        >
      </a-row>
    </div>
  </div>
</template>
<script >

export default {
    data(){
        return {
            userName:'admin',
            password:'123456'

        }
    },
    methods: {
        login() {
            var param = {
                userName:this.userName,
                passWord:this.password
            };
            this.$http.post("https://www.fastmock.site/mock/a375e40786ef28eb7e2a0f5c9819ceda/api/userLogin",param)
            .then(res => {
                console.log('调用成功',res)
            })
        }
    }

}
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f6f6f6;
}

.login > * {
  width: 100%;
}

.login-title {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 60px;
  color: #1b9aee;
}

.account-content {
  width: 432px;
  height: auto !important;
  position: relative;
  background: #fff;
  -webkit-box-shadow: 0 4px 6px rgb(0 0 0 / 10%), 0 12px 20px rgb(38 38 38 / 12%);
  box-shadow: 0 4px 6px rgb(0 0 0 / 10%), 0 12px 20px rgb(38 38 38 / 12%);
  border-radius: 12px;
  padding: 60px 36px;
}

.account-content > div {
  margin-bottom: 20px;
}

.account-content > div:last-of-type {
  margin-bottom: 0;
}
</style>