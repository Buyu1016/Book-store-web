<template>
  <div class="card-details-container">
    <div v-for="item in data" :key="item.id">
        <Card class="card">
            <div class="card-left">
                <div class="card-img">
                    <img :src="item.imgUrl" :alt="item.bookname">
                </div>
                <div class="card-content">
                    <h3>{{item.bookname}}</h3>
                    <p>{{item.author}}/编著</p>
                    <p>{{item.press}}</p>
                    <p>{{item.identifier}}</p>
                </div>
            </div>
            <div class="card-right">
                <p>{{item.price ? `￥${item.price}` : '暂无'}}</p>
                <Icon type="ios-add-circle" v-if="item.price" style="font-size:20px; cursor: pointer;" @click="addShops(item)"/>
            </div>
        </Card>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            required: true,
            default: () => [],
        }
    },
    methods: {
        addShops(message) {
            if(this.$store.state.user.isLogin) {
                this.$Message.success(`商品已添加入购物车`);
                if(!this.$store.state.shop.shopData.length>0) {
                    this.$store.commit('shop/setShopData', {
                        id: message.id,
                        imgUrl: message.imgUrl,
                        price: message.price,
                        name: message.bookname,
                        author: message.author,
                        press: message.press,
                        sum: 1,
                    });
                }else {
                    for (let i = 0; i < this.$store.state.shop.shopData.length; i++) {
                        if(this.$store.state.shop.shopData[i].id === message.id){
                            this.$store.commit('shop/addShopSum', i);
                            return;
                        }
                    }
                    this.$store.commit('shop/setShopData', {
                        id: message.id,
                        imgUrl: message.imgUrl,
                        price: message.price,
                        name: message.bookname,
                        author: message.author,
                        press: message.press,
                        sum: 1,
                    });
                }
            }else {
                this.$Message.error(`请登录后再进行尝试该操作`);
            }
        }
    }
}
</script>

<style scoped lang="less">
.card-details-container{
    .card{
        margin-bottom: 10px;
        padding: 10px 10px 10px 20px;
        box-sizing: border-box;
        min-width: 700px;
        .card-left{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .card-img{
                img{
                    width: 70px;
                    height: 100px;
                    transform: scale(1);
                    transition: all 1s;
                    &:hover{
                        transform: scale(1.5);
                    }
                }
                overflow: hidden;
            }
            .card-content{
                margin-left: 10px;
            }
        }
        .card-right{
            display: flex;
            align-items: center;
            justify-content: center;
            p{
                font-size: 20px;
                color: red;
                margin-right: 10px;
            }
        }
    }
}
</style>