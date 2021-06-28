import { setCookie, cancellationCookie } from '@/utils/setCookie';

export default {
    namespaced: true,
    state: {
        username: null,
        password: null,
        isLogin: false,
        signDate: null,
    }, 
    mutations: {
        // 登录
        setUser(store, payload) {
            store.username = payload.username;
            store.password = payload.password;
            store.isLogin = true;
            setCookie('user', JSON.stringify({
                username: payload.username,
                password: payload.password,
                isLogin: true,
            }));
        },
        // 注销
        cancellationUser(store, payload) {
            store.username = null;
            store.password = null;
            store.isLogin = false;
            cancellationCookie('user');
        },
        setSignDate(store, payload) {
            store.signDate = payload;
        }
    },
}