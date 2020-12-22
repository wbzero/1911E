import {
    expr
} from "jquery"
import {
    get,
    post,
    put
} from "../http/http"
export function getAppIndex() {
    return get("api/app/recommend/appIndex")
}
export function banner() {
    return get("api/app/banner")
}
// 课程详情
export function course(id) {
    return get("api/app/courseInfo/basis_id=" + id)
}
// 课程详情
export function courses(id) {
    return post("api/app/courseChapter?id=" + id)
}
// 课程详情的评论
export function pinglun(id) {
    return post("api/app/courseComment?id=" + id)
}
// 老师介绍
export function tearch(id) {
    return get(`api/app/teacher/${id}`)
}
// 主讲课程
export function kecheng() {
    return post("api/app/teacher/mainCourse")
}
// 资讯
export function zixun(id) {
    return post("api/app/information/detail/", id)
}
// 短信验证
export function smsCode(obj) {
    return post("api/app/smsCode", obj)
}
//点击登录
export function login(obj) {
    return post("api/app/login", obj)
}
// 设置密码
export function pass(obj) {
    return post("api/app/password", obj)
}
// 课程接口
export function curriculum(obj) {
    return get("api/app/courseBasis", obj)
}
// 教师团队
export function tuan(id) {
    return get("api/app/courseInfo/basis_id=" + id)
}
// 筛选
export function shuaixuan() {
    return get("api/app/courseClassify")
}
// 收藏
export function shoucang(obj) {
    return post("api/app/collect", obj)
}
// 取消收藏
export function quxiao(id) {
    return put(`api/app/collect/cancel/${id}/1`)
}
// 我的页面收藏
export function shoucangs(obj) {
    return get("api/app/collect", obj)
}
// 学习
// api/app/myStudy/course
// 立即报名
export function baoming(obj) {
    return post("api/app/order/downOrder", obj)
}
// api/app/myStudy/course
export function xuexi(id) {
    return get(`api/app/myStudy/course/${id}`)
}
// 收钱·
export function qian(obj) {
    return post("api/app/order/shopInfo", obj)
}
// 充值
export function chongzhi(id) {
    return get(`api/app/coin/coinRank`)
}
//点击上传头像
export  function  portrait(obj) {
return post("api/app/public/img",obj)
}
//获取用户个人信息
export  function  user() {
    return get("api/app/userInfo")

}
//确定修改昵称
export  function niCheng(obj) {
return put("api/app/user",obj)
}
//关于城市选择
export function city() {
return get("api/app/sonArea/0")
}
//市
export function  cityShi(id) {
    return get(`api/app/sonArea/${id}`)
}
//年级和学科
export function grade() {
return get("api/app/module/attribute/1?")
}
//我的页面的特色课
export function characteristic() {
return get("api/app/myStudy/2")
}
//约课数据

export  function invite(obj) {
    return get("https://www.365msmk.com/api/app/otoCourse",obj)
}
//课程订单
export function  order(obj) {
return post("api/app/myOrder",obj)
}
//课程订单详情
export function orderListAll(obj) {
return post('api/app/myOrder/detail',obj)
}