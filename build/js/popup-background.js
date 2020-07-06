/*
 * @Author: Ian
 * @Email: 1136005348@qq.com
 * @Date: 2020-07-03 19:37:47
 * @LastEditTime: 2020-07-04 00:21:45
 * @LastEditors: Ian
 * @Description:
 */

/**
 * background 留给 popup 调用的接口
 */

function toggle(enabled) {
  console.log(`toggle: ${enabled}`)
  if (enabled === config.enabled) return
  setConfig({enabled})
  if (enabled) {
    watchLogin(onLogin)
    watchServer(config.interval, onDownload)
  } else {
    unWatchLogin()
    unWatchServer()
  }
}

function setUser(email) {
  console.log(`setUser: ${email}`)
  setConfig({user: email})
  if (email) {
    setData(data.user[email])
  } else {
    setData({localStorage: {}, sessionStorage: {}, cookies: []})
  }
}

function changeServer(server) {
  setConfig({server})
}

function getBgData() {
  return {data, config}
}
