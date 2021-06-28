<template>
  <div class="shopp-card-container">
    <Card v-for="item in data" :key="item.id">
        <div>
          <h4 class="title">{{item.name}}</h4>
          <p>单价：￥{{item.price}}</p>
          <p>
            <Icon type="md-remove-circle" style="cursor: pointer;" @click="reduceShop(item)"/>
            {{item.sum}}
            <Icon type="md-add-circle" style="cursor: pointer;" @click="addShop(item)"/>
          </p>
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
      reduceShop(message) {
        for (let i = 0; i < this.$store.state.shop.shopData.length; i++) {
          if(this.$store.state.shop.shopData[i].id === message.id){
            this.$store.commit('shop/reduceShopSum', i);
          }
        }
      },
      addShop(message) {
        for (let i = 0; i < this.$store.state.shop.shopData.length; i++) {
          if(this.$store.state.shop.shopData[i].id === message.id){
            this.$store.commit('shop/addShopSum', i);
          }
        }
      }
    }
}
</script>

<style scoped lang="less">
.shopp-card-container{
  .ivu-card{
    padding: 5px;
    margin-bottom: 10px;
    .title{
      width: 220px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }    
  }
}
</style>