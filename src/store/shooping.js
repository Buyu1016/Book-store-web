import { setCookie, getCookie } from '@/utils/setCookie.js';
export default {
    namespaced: true,
    state: {
        // 商品id数组
        shopData: [],
    },
    mutations: {
        setShopData(store, payload) {
            store.shopData.push(payload);
            setCookie("shopMessages", JSON.stringify(store.shopData));
        },
        loadingCookie(store, payload) {
            store.shopData = payload;
        },
        addShopSum(store, payload){
            store.shopData[payload].sum++;
            setCookie("shopMessages", JSON.stringify(store.shopData));
        },
        reduceShopSum(store, payload){
            if(store.shopData[payload].sum <= 1){
                store.shopData.splice(payload,1);
            }else{
                store.shopData[payload].sum --;
            }
            setCookie("shopMessages", JSON.stringify(store.shopData));
        }
    },
}