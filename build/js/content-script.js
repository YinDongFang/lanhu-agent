/*
 * @Author: Ian
 * @Email: 1136005348@qq.com
 * @Date: 2020-07-03 11:14:21
 * @LastEditTime: 2020-07-03 23:02:13
 * @LastEditors: Ian
 * @Description:
 */

console.log('注入脚本')

const CMD_GET = 'get-storage'
const CMD_SET = 'set-storage'

const vue = new Vue()

function agentGetStorage(storage) {
  const res = {}
  for (let index = 0; index < storage.length; index++) {
    res[storage.key(index)] = storage.getItem(storage.key(index))
  }
  return res
}

function agentSetStorage(storage, data) {
  Object.entries(data).forEach(([key, value]) => {
    storage.setItem(key, value)
  })
}

// 注入DOM，挂载Vue实例
document.addEventListener('DOMContentLoaded', () => {
  console.log('文档加载完毕')

  const div = document.createElement('div')
  div.id = 'lanhu-agent-app'
  document.body.appendChild(div)
  vue.$mount('#lanhu-agent-app')

  // 接收消息，弹出通知
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.cmd === CMD_GET) {
      console.log({
        localStorage: agentGetStorage(window.localStorage),
        sessionStorage: agentGetStorage(window.sessionStorage),
      })
      sendResponse({
        localStorage: agentGetStorage(window.localStorage),
        sessionStorage: agentGetStorage(window.sessionStorage),
      })
    } else if (request.cmd === CMD_SET) {
      const {localStorage, sessionStorage} = request
      agentSetStorage(window.localStorage, localStorage)
      agentSetStorage(window.sessionStorage, sessionStorage)
    }
  })
})
