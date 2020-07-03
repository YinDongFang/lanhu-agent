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
      <user-info v-for="item in users" :key="item.email" :info="item" :current="item.email === current" @check="onCheck" />
    </el-main>
  </el-container>
</template>

<script>
import UserInfo from './components/UserInfo.vue'

const bg = window.chrome.extension.getBackgroundPage()

export default {
  name: 'app',
  components: {
    UserInfo,
  },
  data() {
    return {
      sync: true,
      users: [],
      current: '',
    }
  },
  watch: {
    sync(val) {
      bg.toggle(val)
    },
  },
  created() {
    this.refresh()
  },
  methods: {
    refresh() {
      const {data, config} = bg.getBgData()
      console.log({data, config})
      if (data && config) {
        this.users = Object.values(data.user)
        this.sync = config.enabled
        this.current = config.user
      }
    },
    onCheck(email) {
      this.current = email
      bg.setUser(email)
    },
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
