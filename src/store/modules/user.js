import { createSlice } from '@reduxjs/toolkit';
import { loginAPI, getUserApi } from '@/apis/user';
import { setToken as _setToken, getToken, removeToken } from '@/utils'

const userStore = createSlice({
    name: 'user',
    // 数据状态
    initialState: {
        token: getToken() || '',
        userInfo: {}
    },
    // 同步修改方法
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            _setToken(action.payload)
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload
        },
        clearUserInfo(state) {
            state.token = ''
            state.userInfo = {}
            removeToken()
        }
    }
})

// 解构出actionCreater
const { setToken, setUserInfo, clearUserInfo } = userStore.actions;

// 获取reducer函数
const userReducer = userStore.reducer;

// 登录获取token异步方法封装
const fetchLogin = (payload) => {
    return async (dispatch) => {
        const res = await loginAPI(payload)
        dispatch(setToken(res.data?.token))
        return res
    }
}

// 获取个人用户信息异步方法
const fetchUserInfo = () => {
    return async (dispatch) => {
        const res = await getUserApi()
        dispatch(setUserInfo(res.data))
        return res
    }
}

export { setToken, fetchLogin, fetchUserInfo, clearUserInfo }

export default userReducer