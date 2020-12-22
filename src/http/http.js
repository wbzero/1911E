import axios from "axios";


// 环境的切换 环境指的是开发环境和生产环境
// 开发环境 development 中用到的是测试环境  生产环境 production

// 设置默认路径 地外了门特  po大可深
if (process.env.NODE_ENV == "development") {
    axios.defaults.baseURL = "http://120.53.31.103:84/"
}
if (process.env.NODE_ENV == "production") {
    axios.defaults.baseURL = "https://wap.365msmk.com/"
}
// 设置超时时间
axios.defaults.timeout = 10000;
var token = localStorage.adminToken
axios.interceptors.request.use(config => {
    config.headers = {
        "DeviceType": 'H5'
    }
    config.headers.Authorization = "Bearer " + token
    return config;
})

// 使用promise返回axios 请求的结果 promise

export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err);
        })
    })
}
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}
export function put(url, params) {
    return new Promise((resolve, reject) => {
        axios.put(url, params).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}