<template>
  <div class="classic-shoops-container">
      <Shoops title="新品推荐" :shoopData="data" />
  </div>
</template>

<script>
import Shoops from '@/components/Shoops';

export default {
  components: {
    Shoops,
  },
  data() {
    return {
      data: [],
    }
  },
  async created() {
    await fetch("http://localhost:2550/api/books?page=2&limit=3").then(resp => {
      return resp.json();
    }).then(resp => {
      this.data = resp.data;
    })
  }
}
</script>

<style scoped lang="less">
.classic-shoops-container{
  width: 100%;
  min-width: 1000px;
  height: 28vh;
  min-height: 270px;
  background: #FFFFFF;
  box-sizing: border-box;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 20px;
}
</style>