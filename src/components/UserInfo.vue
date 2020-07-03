<template>
  <div class="user-info" :class="{'is-current': current}">
    <el-badge :value="info.online || 0" type="success">
      <el-avatar :size="50" :src="info.avatar">
        {{ info.name }}
      </el-avatar>
    </el-badge>
    <div class="middle">
      <span>{{ info.name }}</span>
      <span>{{ info.email || '/' }}</span>
    </div>
    <span v-if="current" style="font-size: 14px; color: #409eff;">当前用户</span>
    <el-button v-else type="primary" icon="el-icon-refresh" size="small" circle @click="$emit('check', info.email)"/>
  </div>
</template>

<script>
export default {
  name: 'user-info',
  props: {
    info: Object,
    current: Boolean,
  },
}
</script>

<style lang="scss">
.user-info {
  display: flex;
  align-items: center;
  .el-badge__content.is-fixed {
    right: 15px;
    top: 5px;
  }
  .middle {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    span {
      line-height: 20px;
    }
    span:first-child {
      font-size: 14px;
    }
    span:last-child {
      font-size: 12px;
      color: #999999;
    }
  }
}
</style>
