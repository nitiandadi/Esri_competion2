"use strict";
exports.__esModule = true;
exports.getAuthorityList = exports.getRoleList = exports.getUserList = exports.getGoodsList = exports.login = void 0;
var index_1 = require("@/request/index");
console.log(index_1["default"]);
// 登录接口
function login(data) {
    return index_1["default"]({
        url: "/users/login",
        method: "POST",
        data: data
    });
}
exports.login = login;
// 商品列表接口
function getGoodsList() {
    return index_1["default"]({
        url: "/getGoodsList",
        method: "GET"
    });
}
exports.getGoodsList = getGoodsList;
// 用户列表接口
function getUserList() {
    return index_1["default"]({
        url: "/getUserList",
        method: "GET"
    });
}
exports.getUserList = getUserList;
// 角色列表接口
function getRoleList() {
    return index_1["default"]({
        url: "/getRoleList",
        method: "GET"
    });
}
exports.getRoleList = getRoleList;
// 权限列表接口
function getAuthorityList() {
    return index_1["default"]({
        url: "/getAuthorityList",
        method: "GET"
    });
}
exports.getAuthorityList = getAuthorityList;
