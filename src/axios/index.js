import axios from 'axios'

const axiosInstance = axios.create({
  timeout: 60000
})
axiosInstance.defaults.baseURL = 'https://cnodejs.org/api/v1'
// 统一处理ajax失败
axiosInstance.interceptors.response.use(function (res) {
  // Toast.hide()
  const response = res.data
  if (!response.success) {
    // alert(JSON.stringify(response))
    return Promise.reject(error)
  }
  return res.data.data
}, function (error) {
  console.log(error)
  // alert('网络中断了，请重试')
  // Toast.hide()
  return Promise.reject(error)
})

export default axiosInstance
