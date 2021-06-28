<template>
  <div class="classic-shoops-container">
      <div class="content">
        <div class="left">
          <p class="one">
            <span>联系ＱＱ：2460481461</span> 
            <span>联系VX：CodeGorgeous(王帅)</span>  
          </p>
          <p class="two">
            <span>CodeGorgeous版权所有</span>
            <span>暂无备案</span>
          </p>
        </div>
        <div class="right">
          <img class="QR-code" src="http://resource.ityxb.com/assets/book/erweima.jpg" alt="二维码">
          <img class="slogan" src="http://resource.ityxb.com/assets/book/sec5pic1(1)_1.png" alt="为中华之崛起而读书">
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.classic-shoops-container{
  width: 100%;
  height: 100%;
  padding: 20px 15px;
  .content{
    width: 60%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    .left{
      border-right: 1px solid #DDDDDD;
      padding: 25px 15px 15px 15px;
      p{
        height: 20px;
        margin-bottom: 9px;
        span{
          margin-right:30px;
        }
      }
    }
    .right{
      .slogan {
        width: 400px;
        height: 100px;
      }
      .QR-code{
        width: 104px;
        height: 103px;
        margin: 0px 15px ;
      }
    }
  }
}
</style>