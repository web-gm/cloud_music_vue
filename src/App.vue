<template>
  <div class="header">
    <div class="wraper">
      <div class="logo"></div>
      <div class="nav">
        <router-link class="item" v-for="(item,index) in navs" :key="index" :to="item.link">{{item.title}}</router-link>
      </div>
      <div class="search"></div>
      <div class="login"></div>
    </div>
  </div>
  <transition name="fade">
    <router-view />
  </transition>
</template>
<script>
export default {
  name: 'App',
  components: {},
  data () {
    return {
      navs: [
        {
          title: '发现音乐',
          link: '/'
        },
        {
          title: '我的音乐',
          link: '/my'
        },
        {
          title: '朋友',
          link: '/frient'
        },
        {
          title: '商城',
          link: '/store'
        },
        {
          title: '音乐人',
          link: '/musicer'
        },
        {
          title: '下载客户端',
          link: '/download'
        }
      ]
    }
  }
}
</script>
<style lang="less">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.header {
  height: 70px;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 1px solid #000;
  .wraper {
    width: 1100px;
    margin: 0 auto;
    .logo {
      float: left;
      width: 176px;
      height: 69px;
      background: url(./assets/topbar.png) no-repeat 0 9999px;
      background-position: 0 0;
    }
    .nav{
      float: left;
      overflow: hidden;
      .item{
        float: left;
        width: 94px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        text-decoration: none;
        color: #ccc;
        font-size: 14px;
        position: relative;
        &:hover, &.router-link-active{
          background: #000;
          color: #fff,
        }
        &.router-link-active::after{
          content: '';
          border: 8px solid transparent;
          border-bottom: 8px solid red;
          width:0;
          height:0;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%);
        }
      }
    }
  }
}
</style>
