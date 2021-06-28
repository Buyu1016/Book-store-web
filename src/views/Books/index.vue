<template>
  <div class="book-container">
      <CardDetails :data="data" />
      <Page :total="total" @on-change="changPage" />
  </div>
</template>

<script>
import CardDetails from "@/components/CardDetails"

export default {
  components: {
    CardDetails,
  },
  data() {
    return {
      data: [],
      total: 0,
    }
  },
  async created() {
    await this.getData(1,10);
  },
  methods: {
    async getData(page, limit) {
      const result = await fetch(`http://localhost:2550/api/books?page=${page}&limit=${limit}`).then(resp => resp.json());
      this.data = result.data;
      this.total = result.total;
    },
    async changPage(value){
      await this.getData(value, 10);
    }
  }
}
</script>

<style scoped lang="less">
.book-container{
  width: 60%;
  margin: 0 auto;
  margin-top: 10px;
}
</style>