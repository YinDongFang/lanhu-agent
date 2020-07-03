<template>
  <el-container id="app">
    <el-header height="70px">
      <div>
        <img src="./assets/logo.png" width="30px" height="30px" />
        <div>
          <h1>Lanhu Agent</h1>
          <span>右侧开启同步实现多设备登录</span>
        </div>
      </div>
      <el-switch v-model="sync" />
    </el-header>
    <el-main>
      <user-info :info="{name: 'Aaron', email: '1136005348@qq.com'}" />
      <user-info :info="{name: 'Aaron', email: '1136005348@qq.com'}" :current="true" />
    </el-main>
  </el-container>
</template>

<script>
import UserInfo from './components/UserInfo.vue'

export default {
  name: 'app',
  components: {
    UserInfo,
  },
  data() {
    return {
      sync: true,
    }
  },
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  width: 350px;
  background-color: #fefdff;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  user-select: none;
  .el-header {
    border-bottom: 1px solid #eaeaea;
    display: flex;
    align-items: center;
    div:first-child {
      flex: 1;
      display: flex;
      align-items: center;
      font-size: 12px;
      div {
        margin-left: 10px;
        h1 {
          margin: 0 0;
        }
        span {
          color: #999999;
        }
      }
    }
  }
  .el-main {
    padding: 10px;
    .user-info {
      padding: 10px;
    }
    .user-info.is-current {
      background: rgb(236, 245, 255);
    }
  }
}
</style>
