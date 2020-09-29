const userUtils = {
    // 手机号验证
    checkoutMobile(mobile){
        var reg = /^1[3456789]\d{9}$/;
        if(reg.test(mobile)){
            return true
        }else {
            return false
        }
    },
    // 密码验证
    checkoutPassword(password){
        var reg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[_]){5,17}$/; 
        if(reg.test(password)){
            return true
        }else {
            return false
        }
    },
    // 把token存储到本地
    saveToken(token){
        localStorage.setItem('token',token)
    },
    // 获取本地的token
    getToken(){
        return localStorage.getItem('token')
    },
    // 判断本地是否有token
    isLogin(){
        var token = localStorage.getItem('token')
        if(token){
            return true
        }else {
            return false
        }
    }
}

export default userUtils;