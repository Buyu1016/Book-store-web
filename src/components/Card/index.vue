<template>
  <div class="card-container">
      <Card class='card' style="width:320px" v-for="item in data" :key="item.id">
        <div class="img">
            <img :src="item.imgUrl" alt="书籍是人类进步的阶梯">
        </div>
        <div class="content">
            <h3>{{item.bookname}}</h3>
            <p>{{item.press}}</p>
            <div>{{item.identifier}}</div>
            <p>{{item.author}}/编著</p>
            <div class="message">
                <span>定价：<span>{{item.price ? '￥'+ item.price : '暂无'}}</span></span>
                <Icon v-if="item.price" type="md-add-circle" class="join" @click="addShops(item)"/>
            </div>
        </div>
      </Card>
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
.card-container{
    display: flex;
    align-items: center;
    justify-content:space-around;
    .card{
        display: inline-block;
        width: 370px;
        height: 182px;
        div{
            display: inline-block;
        }
        .img{
            width: 121px;
            height: 170px;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
                transform: scale(1);
                transition: transform 1s;
                &:hover{
                    transform: scale(1.5);
                }
            }
        }
        .content{
            width: 180px;
            height: 171px;
            padding: 10px 0 0 2px;
            h3{
                width: 100%;
                height: 30px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            p{
                margin: 2px 0;
                font-size: 12px;
                color: #999;
            }
            .message{
                display: flex;
                justify-content:space-between;
                align-items: center;
                span {
                    span{
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }
                }
                .join{
                    cursor: pointer;
                    font-size: 20px;
                    margin-right: 10px;
                }
            }
        }
    }
}
</style>