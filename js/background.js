/*
 * @Author: Ian
 * @Email: 1136005348@qq.com
 * @Date: 2020-07-03 00:37:09
 * @LastEditTime: 2020-07-03 11:59:17
 * @LastEditors: Ian
 * @Description:
 */
chrome.storage.sync.get(['enabled', 'interval'], (items) => {
  console.log(items.color, items.age)
})

// 监测登录行为
watchLogin()
function watchLogin() {
  chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
      const msg = {
        title: '监测到用户登录',
        message: `用户：${details.requestBody.formData.email}`,
      }
      // chrome.tabs.query({active: true, currentWindow: true}, ([{id}]) => {
      //   console.log(id)
      //   chrome.tabs.sendMessage(id, msg)
      // })
      chrome.notifications.create(null, {
        type: 'basic',
        iconUrl: 'img/icon.png',
        ...msg,
      })
      console.log(details)
      setTimeout(() => {
        chrome.cookies.getAll({url: 'https://lanhuapp.com'}, (cookies) => {
          console.log(cookies)
        })
      }, 1000)
    },
    {urls: ['*://lanhuapp.com/*/login']},
    ['extraHeaders', 'requestBody']
  )
}
