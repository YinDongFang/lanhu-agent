/*
 * @Author: Ian
 * @Email: 1136005348@qq.com
 * @Date: 2020-07-03 19:59:44
 * @LastEditTime: 2020-07-03 23:05:41
 * @LastEditors: Ian
 * @Description:
 */

const CMD_GET = 'get-storage'
const CMD_SET = 'set-storage'

// 获取蓝湖tab
function _getTab() {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({url: ['*://lanhuapp.com/*']}, (tabs) => {
      console.log(tabs)
      resolve(tabs[0])
    })
  })
}

// 获取存储信息
function _getStorage(tab) {
  return new Promise((resolve, reject) => {
    if (!tab) return resolve(null)
    chrome.tabs.sendMessage(tab.id, {cmd: CMD_GET}, function(response) {
      resolve(response)
    })
  })
}

// 设置存储信息
function _setStorage(tab, data) {
  return new Promise((resolve, reject) => {
    if (!tab) return resolve(null)
    chrome.tabs.sendMessage(tab.id, {cmd: CMD_SET, ...data}, function(response) {
      resolve(response)
    })
  })
}

function _getCookies() {
  return new Promise((resolve, reject) => {
    chrome.cookies.getAll({url: 'https://lanhuapp.com'}, (cookies) => {
      resolve(cookies)
    })
  })
}

function _setCookies(cookies) {
  cookies.forEach((cookie) => {
    cookie.url = 'https://lanhuapp.com'
    delete cookie.hostOnly
    delete cookie.session
    console.log(cookie)
    chrome.cookies.set(cookie)
  })
}

async function getData() {
  const tab = await _getTab()
  const storages = await _getStorage(tab)
  const cookies = await _getCookies()
  return {
    cookies,
    ...storages,
  }
}

async function setData(data) {
  const tab = await _getTab()
  const res = await _setStorage(tab, data)
  _setCookies(data.cookies)
}
