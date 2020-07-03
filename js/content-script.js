/*
 * @Author: Ian
 * @Email: 1136005348@qq.com
 * @Date: 2020-07-03 11:14:21
 * @LastEditTime: 2020-07-03 11:53:28
 * @LastEditors: Ian
 * @Description:
 */

const vue = new Vue()

// 注入DOM，挂载Vue实例
document.addEventListener('DOMContentLoaded', () => {
  const div = document.createElement('div')
  div.id = 'lanhu-agent-app'
  document.body.appendChild(div)
  vue.$mount('#lanhu-agent-app')
})

// 接收消息，弹出通知
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.cmd == 'notify') {
    vue.$notify(request.value)
  }
})
