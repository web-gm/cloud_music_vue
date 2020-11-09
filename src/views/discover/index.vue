<template>
  <div>
    <div class="nav-discover">
      <div class="container" style="padding-left: 360px;">
        <router-link
          class="item"
          v-for="(item, index) in navs"
          :key="index"
          :to="item.link"
          >{{ item.title }}</router-link
        >
      </div>
    </div>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navs: [
        {
          title: '推荐',
          link: '/discover/index'
        },
        {
          title: '排行榜',
          link: '/discover/toplist'
        },
        {
          title: '歌单',
          link: '/discover/playlist'
        },
        {
          title: '主播电台',
          link: '/discover/djradio'
        },
        {
          title: '歌手',
          link: '/discover/artist'
        },
        {
          title: '新碟上架',
          link: '/discover/album'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.nav-discover {
  z-index: 90;
  height: 35px;
  box-sizing: border-box;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
  .item {
    display: inline-block;
    height: 20px;
    padding: 0 13px;
    margin: 7px 17px 0;
    border-radius: 20px;
    line-height: 21px;
    text-decoration: none;
    color: #ffffff;
    font-size: 12px;
    &:hover,
    &.router-link-active {
      background: #9b0909;
    }
  }
}
</style>
