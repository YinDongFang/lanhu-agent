const fs = require('fs')
const expired = 10000
const path = './mnt/lanhu/.config'

if (!fs.existsSync(path)) {
  const json = {user: {}, record: {}}
  fs.writeFileSync(path, JSON.stringify(json))
}

// {user:{}, record:{}}
module.exports = {
  _load() {
    const txt = fs.readFileSync(path)
    return JSON.parse(txt)
  },
  _save(json) {
    const txt = JSON.stringify(json)
    fs.writeFileSync(path, txt)
    return txt
  },
  // 下载用户文件，更新在线人数
  download({id, email}) {
    const json = this._load()
    // 更新设备在线时间
    json.record[id] = {
      user: email,
      timestamp: Date.now(),
    }
    Object.values(json.user).forEach((data) => {
      data.online = 0
    })
    const now = Date.now()
    Object.values(json.record).forEach((data) => {
      now - data.timestamp <= expired && json.user[data.user] && json.user[data.user].online++
    })
    return this._save(json)
  },
  // 上传用户数据
  upload({id, user}) {
    const json = this._load()
    // 记录用户登录时间
    user.timestamp = Date.now()
    // 记录用户数据
    json.user[user.email] = user
    // 记录设备登录时间
    json.record[id] = {
      user: user.email,
      timestamp: user.timestamp,
    }
    return this._save(json)
  },
}
