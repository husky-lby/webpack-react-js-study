import axios from 'axios'

const service = axios.create({
  baseURL: '',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

const whiteList = ['/login','/register']

// 请求拦截器
service.interceptors.request.use((config)=>{
  console.log(config.url);
  if(whiteList.includes(config.url)) {
    return config
  } else {
    config.headers.token = 'lby'
  }
})
// 响应拦截器
service.interceptors.response.use((data)=>{
  console.log(data);
  return data
})

export default service