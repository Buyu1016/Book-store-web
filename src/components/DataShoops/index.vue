<template>
  <div class="data-shoops-container">
      <Shoops title="大数据技术与应用丛书"  :shoopData="data" />
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
    await fetch("http://localhost:2550/api/books?page=1&limit=3&type=数据").then(resp => {
      return resp.json();
    }).then(resp => {
      this.data = resp.data;
    })
  }
}
</script>

<style scoped lang="less">
.data-shoops-container{
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