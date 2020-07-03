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
      <el-button icon="el-icon-s-tools" size="mini" type="info" circle @click="show = !show"></el-button>
      <el-switch v-model="sync" />
    </el-header>
    <transition name="slide-fade">
      <div class="setting" v-if="show">
        <el-form class="setting__content" label-width="100px">
          <el-form-item label="服务器地址">
            <el-input v-model="server"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </transition>
    <el-main>
      <el-scrollbar wrap-class="list" :native="false">
        <user-info v-for="item in users" :key="item.email" :info="item" :current="item.email === current" @check="onCheck" />
      </el-scrollbar>
    </el-main>
  </el-container>
</template>

<script>
import UserInfo from './components/UserInfo.vue'

const bg = window.chrome && window.chrome.extension ? window.chrome.extension.getBackgroundPage() : null

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
      server: '',
      show: false,
    }
  },
  watch: {
    sync(val) {
      if (bg) bg.toggle(val)
    },
    server(val) {
      if (bg) bg.changeServer(val)
    },
  },
  created() {
    this.refresh()
  },
  methods: {
    refresh() {
      if (!bg) return
      const {data, config} = bg.getBgData()
      console.log({data, config})
      if (data && config) {
        this.users = Object.values(data.user)
        this.sync = config.enabled
        this.current = config.user
        this.server = config.server
      }
    },
    onCheck(email) {
      this.current = email
      if (bg) bg.setUser(email)
    },
  },
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  height: 0;
}
.slide-fade-leave,
.slide-fade-enter-to {
  height: 50px;
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
    .el-button--mini.is-circle {
      padding: 4px;
      margin-right: 5px;
    }
  }
  .setting {
    background: #fafafa;
    overflow: hidden;
    border-bottom: 1px solid #eaeaea;
    &__content {
      height: 50px;
      padding-right: 20px;
      overflow: hidden;
      .el-form-item {
        margin-bottom: 10px;
        margin-top: 10px;
        &__label,
        &__content {
          line-height: 30px;
        }
        .el-input__inner {
          line-height: 30px;
          height: 30px;
          padding: 0 5px;
        }
      }
    }
  }
  .el-main {
    padding: 0;
    .list {
      padding: 10px;
      padding-top: 0;
      max-height: 350px;
    }
    .user-info {
      padding: 10px;
    }
    .user-info.is-current {
      background: rgb(236, 245, 255);
    }
  }
}
</style>
