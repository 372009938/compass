// 用户相关的所有请求
import { request } from "@/utils"

// 1. 登录请求
export function loginAPI(param) {
    const apiUrl = `/users/login`;
    return request(apiUrl, { method: 'POST', data: param });
}

export function getUserApi() {
    const apiUrl = `/user`;
    return request(apiUrl, { method: 'GET' });
}
