<template>
  <div class="home-container">
      <div class="carousel">
        <Carousel />
      </div>
      <div class="content">
        <div>
          <newShoop />
          <ClassicShoops />
          <DataShoops />
          <PythonShoops />
          <WebShoops />
          <SetUpShoops />
        </div>
      </div>
      <div class="fotter">
        <Fotter />
      </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import Fotter from '@/components/Fotter'
import newShoop from '@/components/newShoop'
import ClassicShoops from '@/components/ClassicShoops'
import DataShoops from '@/components/DataShoops'
import PythonShoops from '@/components/PythonShoops'
import WebShoops from '@/components/WebShoops'
import SetUpShoops from '@/components/SetUpShoops'

export default {
  components: {
    Carousel,
    newShoop,
    Fotter,
    ClassicShoops,
    DataShoops,
    PythonShoops,
    WebShoops,
    SetUpShoops
  },
}
</script>

<style scoped lang="less">
.home-container{
  width: 100%;
  height: 100%;
  .carousel{
    width: 100%;
    height: 40vh;
    overflow: hidden;
  }
  .content{
    width: 60%;
    margin: 0 auto;
    margin-top: 30px
  }
  .fotter{
    width: 100%;
    height: 15vh;
    background: #FFFFFF;
    margin-top: 30px;
    box-sizing: border-box;
    border-top: 1px solid #DDDDDD;
  }
}
</style>