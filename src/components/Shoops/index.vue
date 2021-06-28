<template>
  <div class="shoops-container">
      <div class="header">
          <a href="http://resource.ityxb.com/booklist/find.html">
              <span class="title">{{title}}</span>
          </a>
          <a href="http://resource.ityxb.com/booklist/find.html">
              <span>更多<Icon type="ios-arrow-dropright" /></span>
          </a>
      </div>
      <div class="content">
          <Card :data="shoopData" />
      </div>
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
    components: {
        Card,
    },
    props: {
        title: {
            type: String,
            required: true,
            default: '商品',
        },
        shoopData: {
            type: Array,
            required: true,
            default: () => [],
        }
    }
}
</script>

<style scoped lang="less">
.shoops-container{
    width: 100%;
    height: 100%;
    .header{
        padding: 15px;
        border-bottom: 1px solid #F5F5F5;
        display: flex;
        justify-content:space-between;
        align-items: center;
        .title{
            font-size: 16px;
        }
    }
    .content{
        padding: 15px;
    }
}
</style>