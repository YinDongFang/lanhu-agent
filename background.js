/*
 * @Author: Ian
 * @Email: 1136005348@qq.com
 * @Date: 2020-07-03 00:37:09
 * @LastEditTime: 2020-07-03 01:11:31
 * @LastEditors: Ian
 * @Description:
 */
chrome.storage.sync.get(['enabled', 'interval'], function(items) {
	console.log(items.color, items.age);
});
function watchLogin() {
  chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
      chrome.notifications.create(null, {
        type: 'basic',
        iconUrl: 'img/icon.png',
        title: '登录蓝湖',
        message: '用户：' + details.requestBody.formData.email,
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
