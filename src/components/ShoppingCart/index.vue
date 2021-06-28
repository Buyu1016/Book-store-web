<template>
  <div class="shopping-cart-container">
        <Button @click="value1 = true" type="primary" v-if="$store.state.user.isLogin">
            <Icon type="ios-keypad-outline" style="font-size:16px; margin-right:5px;" />
            购物车
        </Button>
        <Drawer title="购物车" :closable="false" v-model="value1">
            <div class="shopping-all">
                <ShoppCard :data="$store.state.shop.shopData" />
            </div>
            <p v-if="$store.state.shop.shopData.length <= 0" class="notData" style="font-size:16px; text-align:center;"><Icon style="font-size:20px;" type="ios-cube-outline" />空空如也</p>
            <p style="width:80%; position:absolute; bottom:10px; border-top: 1px solid #E8EAEC; padding:5px;">总金额：{{sum}}元</p>
        </Drawer>
  </div>
</template>

<script>
import ShoppCard from '@/components/ShoppCard'

export default {
    components: {
        ShoppCard,
    },
    data () {
        return {
            value1: false
        }
    },
    computed: {
        sum() {
            let sum = 0;
            if(this.$store.state.shop.shopData.length > 0){
                for (let i = 0; i < this.$store.state.shop.shopData.length; i++) {
                    const money = this.$store.state.shop.shopData[i].sum * +this.$store.state.shop.shopData[i].price
                    sum += money;
                }
                return sum.toFixed(2);
            }else{
                return sum;
            }
        }
    }
}
</script>

<style>
</style>