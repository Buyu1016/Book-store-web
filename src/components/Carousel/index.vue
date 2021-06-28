<template>
  <div class="carousel-container">
      <Carousel
        v-model="value3"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :radius-dot="setting.radiusDot"
        :trigger="setting.trigger"
        :arrow="setting.arrow">
        <CarouselItem>
            <a href="https://book.itheima.net" target="_blank">
                <img src="http://resource.ityxb.com/uploads/book/_sys/focus/book_heima.jpg?v=2" alt="">
            </a>
        </CarouselItem>
        <CarouselItem>
            <a href="">
                <img src="http://resource.ityxb.com/uploads/book_pic/banner_8.jpg?filter%5Bzt%5D=diy_web" alt="">
            </a>
        </CarouselItem>
        <CarouselItem>
            <a href="https://mp.weixin.qq.com/s?__biz=MjM5MDE4ODY2Nw==&mid=2650029057&idx=1&sn=83319e66b27c99b62c24cf14e10edf04&chksm=be480915893f8003c6311630eaa3beecf93923d3ebabb7b79e9dceebeeb9af0e78aeba74d589&scene=18#wechat_redirect" target="_blank">
                <img src="http://resource.ityxb.com/uploads/book_pic/banner_2.jpg" alt="">
            </a>
        </CarouselItem>
        <CarouselItem>
            <a href="http://resource.ityxb.com/booklist/find.html" target="_blank">
                <img src="http://resource.ityxb.com/uploads/book_pic/banner_7.jpg?v=2" alt="">
            </a>
        </CarouselItem>
        <CarouselItem>
            <a href="http://tch.ityxb.com/" target="_blank">
                <img src="http://resource.ityxb.com/uploads/book_pic/banner_3.jpg?v=1" alt="">
            </a>
        </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
export default {
    data () {
        return {
            value3: 0,
            setting: {
                autoplay: true,
                autoplaySpeed: 5000,
                dots: 'inside',
                radiusDot: false,
                trigger: 'hover',
                arrow: 'hover'
            }
        }
    },
}
</script>

<style scoped lang="less">

</style>