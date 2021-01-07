import config from '../../public/config'

export function socketConnect(socketObj, callback) {
  closeSocket(socketObj)
  const socketUrl = config.platformUrls.socketCertUrl + socketObj.sid
  const ws = new WebSocket(socketUrl)
  ws.onopen = function() {
    console.log('websocket已打开')
  },
  ws.onmessage = function(msg) {
    var serverMsg = '收到服务端信息：' + msg.data
    console.log(serverMsg)
    var jsonData = eval('(' + msg.data + ')')
    if (jsonData.isreal) {
      if (jsonData.account === '') {
        alert('人脸识别信息与系统登记实名信息不符，请联系管理员！')
      } else {
        console.log(jsonData.account)
        callback(jsonData.account, socketObj.sid)
      }
    } else {
      top.$.messager.alert('人脸认证失败', jsonData.msg, 'error')
    }
  },
  ws.onclose = function() {
    // 关闭 websocket
    console.log('连接已关闭...')
  },
  // 组件销毁时调用，中断websocket链接
  socketObj.socketOver = () => {
    closeSocket(socketObj)
  }
  socketObj.websocket = ws
}

function closeSocket(socketObj) {
  if (socketObj.websocket != null) {
    socketObj.websocket.close()
    socketObj.websocket = null
  }
}
