<template>
  <div id="app">
    <div id="nav">
      <div class="header">
        <Header @sign="handleSign2" />
      </div>
      <div class="href">
        <div class="href-content">
          <Menu class="menu" mode="horizontal" :active-name="url">
            <MenuItem name="Home">
              <Router-Link :to="{
                name: 'Home'
              }">
                <Icon type="ios-paper" />
                主页
              </Router-Link>
            </MenuItem>
            <MenuItem name="Books">
                <Router-Link :to="{
                  name:'Books'
                }">
                  <Icon type="ios-people" />
                  全部图书
                </Router-Link>
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div class="login">
        <Modal
          title="欢迎登录"
          v-model="modal1"
          :mask-closable="false"
          ok-text="登录"
          cancel-text="注册" 
          @on-ok="handleSign"
          @on-cancel="handleRegister"
          :closable="false">
            <p>
            <Icon type="md-contact"/>
            <Input v-model="userName" placeholder="用户名" clearable style="width: 200px" />
            </p>
            <p>
              <Icon type="ios-key" />
            <Input v-model="userPwd" type="password" password placeholder="密码" style="width: 200px" />
            </p>
            <p>默认用户：admin    默认密码：123456</p>
        </Modal>
        <Modal
          title="欢迎注册"
          v-model="modal2"
          :mask-closable="false"
          ok-text="注册"
          cancel-text="登录"
          @on-ok="handleRegister2"
          @on-cancel="handleSign2"
          :closable="false">
            <p>
            <Icon type="md-contact"/>
            <Input v-model="registerUserName" placeholder="用户名" clearable style="width: 200px" />
            </p>
            <p>
              <Icon type="ios-key" />
            <Input v-model="registeruserPwd" type="password" password placeholder="密码" style="width: 200px" />
            </p>
        </Modal>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import { getCookie } from '@/utils/setCookie'

export default {
  components: {
    Header,
  },
  data () {
    return {
      modal1: false,
      modal2: false,
      userName: '',
      userPwd: '',
      registerUserName: '',
      registeruserPwd: '',
    }
  },
  computed:{
    url(){
      return this.$route.meta.title;
    }
  },
  created() {
    // if(!this.$store.state.user.isLogin){
    //   this.modal1 = true;
    // }
    const result = getCookie('user');
    if(result){ // 说明已经登录过了   则登录直接读取cookie值
      const user = JSON.parse(result);
      this.$store.commit('user/setUser', user);
      this.$Message.success(`登陆成功`);
    }
    // 加载之前的购物车cookie
    const message = getCookie('shopMessages');
    if(message){
      this.$store.commit('shop/loadingCookie',JSON.parse(message));
    }
  },
  methods: {
    async handleSign(){
      if(!this.userName || !this.userPwd){
        this.$Message.warning(`登录失败，请填写完整信息`);
        return ;
      }
      const user = {
        username: this.userName,
        password: this.userPwd,
      };
      await fetch("http://localhost:2550/api/user/login",{
        method: "POST",
        body: JSON.stringify(user),
        headers: new Headers({
          'Content-Type': "application/json"
        })
      }).then(resp => resp.json()).then(resp => {
        if(resp.state === 'success'){
          this.$Message.success(`登录成功`);
          this.$store.commit('user/setUser', user);
        }else{
          this.$Message.error(`登陆失败`);
        }
      });
    },
    handleRegister() {
      this.modal1 = false;
      this.modal2 = true;
    },
    handleSign2(){
      this.modal1 = true;
      this.modal2 = false;
    },
    async handleRegister2() { // 注册
      const register = {
        username: this.registerUserName,
        password: this.registeruserPwd,
      }
      await fetch("http://localhost:2550/api/user/add",{
        method: "POST",
        body: JSON.stringify(register),
        headers: new Headers({
          'Content-Type': "application/json"
        })
      }).then(resp => resp.json()).then(resp => {
        if(resp.state === 'success'){
          this.$Message.success(`注册成功`);
        }else{
          this.$Message.error(`注册失败`);
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
#app{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  #nav{
    .header{
      width: 100%;
      height: 13vh;
    }
    .href{
      width: 100%;
      height: 6.5vh;
      background: #F8F8F8;
      .href-content{
        width: 60%;
        height: 6.5vh;
        margin: 0 auto;
        .menu{
          height: 6.5vh;
          background: #F8F8F8;
        }
      }
    }
  }
  .content{
    width: 100%;
    height: 20vh;
  }
}
</style>
