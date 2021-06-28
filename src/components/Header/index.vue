<template>
  <div class="header-container">
      <div class="welcome">
          <div class="content">
              <span>欢迎来到传智教育旗下图书馆</span>
              <span class="href">
                  <a href="#" v-if="this.$store.state.user.isLogin">{{`你好,${this.$store.state.user.username}`}}</a>
                  <span v-if="this.$store.state.user.isLogin">|</span>
                  <span style="cursor: pointer;" @click="handleUser">{{this.$store.state.user.isLogin ? `注销` : '登录'}}</span>
                  <span>|</span>
                  <a href="http://www.itcast.cn" target="_blank">传智教育官网</a>
                  <span>|</span>
                  <a href="https://www.boxuegu.com" target="_blank">博学谷</a>
                  <span>|</span>
                  <a href="http://www.itheima.com" target="_blank">黑马程序员</a>
                  <span v-if="this.$store.state.user.isLogin">|</span>
                  <a @click="value1 = true" v-if="this.$store.state.user.isLogin">好友</a>
              </span>
              <Drawer title="我的好友" :closable="false" v-model="value1">
                    <div v-for="item in data" :key="item.id">
                        <Card style="margin-bottom:5px;">
                            <p slot="title"><Icon type="ios-man" />{{item.name}}</p>
                        </Card>
                        <p style="width:80%; position:absolute; bottom:10px; border-top: 1px solid #E8EAEC; padding:5px;">好友数量：{{total}}</p>
                    </div>
              </Drawer>
          </div>
      </div>
      <div class="icon">
          <div class="content">
                <div class="img">
                    <a href="http://resource.ityxb.com/">
                        <img src="http://resource.ityxb.com/assets/book/logo.png" alt="传智教育">
                    </a>
                    <span class="division">|</span>
                    <a href="http://resource.ityxb.com/">
                        <span>图书馆</span>
                    </a>
                </div>
                <div class="search">
                    <ShoppingCart />
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import ShoppingCart from "@/components/ShoppingCart"

export default {
    components: {
        ShoppingCart,
    },
    data() {
        return {
            value1: false,
            data: [],
            total: 0,
        }
    },
    async created() {
        await fetch("http://localhost:2550/api/user/all").then(resp => resp.json()).then(resp => {
            this.data = resp.data;
            this.total = resp.total;
        });
    },
    methods: {
        handleUser(){
            if(this.$store.state.user.isLogin){
                this.$store.commit('user/cancellationUser');
                this.$Message.success(`注销成功`);
            }else{
                this.$emit("sign");
            }
        }
    }
}
</script>

<style scoped lang="less">
.header-container{
    width: 100%;
    height: 100%;
    .welcome{
        background: #F8F8F8;
        .content{
            width: 60%;
            height: 30px;
            font-size:12px;
            margin: 0 auto;
            line-height: 30px;
            display: flex;
            justify-content:space-between;
            .href{
                a{
                    &:hover{
                        opacity: 0.8;
                    }
                }
                span{
                    margin: 0 5px;
                }
            }
        }
    }
    .icon{
        background: #FFFFFF;
        .content{
            width: 60%;
            height: 93px;
            margin: 0 auto;
            display: flex;
            justify-content:space-between;
            align-items: center;
            .img{
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    width: 130px;
                    height: 40px;
                }
                .division{
                    margin: 10px;
                }
                span{
                    font-size: 24px;
                }
            }
            .search{
                .input{
                    margin-right: 20px;
                }
            }
        }
    }
}
</style>