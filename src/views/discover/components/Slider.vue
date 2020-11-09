<template>
  <div
    class="wraper"
    :style="{
      background: `url(${banner.imageUrl}?imageView&blur=40x20) no-repeat center`,
      'background-size': '6000px'
    }"
  >
    <div class="container">
      <div class="imgWraper">
        <a href="#">
          <img :src="`${banner.imageUrl}?imageView&amp;quality=89`" alt="" />
        </a>
      </div>
      <div class="download"></div>
      <div class="pagenation">
        <span
          v-for="(item, index) in banners"
          :key="index"
          :class="`page ${index === key ? ' active' : ''}`"
          @click="() => changeBanner(index)"
        ></span>
      </div>
      <div class="left icon" @click="() => changeBanner(key - 1)"></div>
      <div class="right icon" @click="() => changeBanner(key + 1)"></div>
    </div>
  </div>
</template>

<script>
import { getBanner } from '@/model/discover'
export default {
  data () {
    return {
      typer: {
        1: 'song',
        1004: 'mv',
        10: 'ablum',
        3000: 'url'
      },
      banners: [],
      banner: {},
      key: 0
    }
  },
  methods: {
    async get () {
      const res = await getBanner()
      console.log(res)
      this.banners = res.banners
      this.banner = res.banners[0]
    },
    changeBanner (index) {
      console.log(index)
      if (index < 0) {
        index = this.banners.length - 1
      }
      this.banner = this.banners[index]
      this.key = index
    }
  },
  created () {
    this.get()
  }
}
</script>

<style lang="less" scoped>
.wraper {
  height: 285px;
  .container {
    width: 982px;
    position: relative;
    .imgWraper {
      width: 730px;
      img {
        width: 100%;
        height: 285px;
      }
    }
    .pagenation {
      position: absolute;
      bottom: 10px;
      width: 320px;
      height: 20px;
      left: 205px;
      .page {
        width: 7px;
        height: 7px;
        background: #cdcdcd;
        float: left;
        margin-left: 24px;
        border-radius: 50%;
        cursor: pointer;
        &:hover {
          background: #c20c0c;
        }
      }
      .active {
        background: #c20c0c;
      }
    }
    .download {
      position: absolute;
      top: 0;
      z-index: 20;
      right: -1px;
      width: 254px;
      height: 285px;
      background: url(../../../assets/download.png) no-repeat 0 0;
      box-shadow: 0 0 20px 0px black;
    }
  }
  .icon {
    width: 37px;
    height: 63px;
    position: absolute;
    color: #ffffff;
    top: 105px;
    text-align: center;
    line-height: 63px;
    cursor: pointer;
    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }
    &.left {
      left: -50px;
      &::after {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        border: 2px solid #ffffff;
        border-top-color: transparent;
        border-right-color: transparent;
        transform: rotate(45deg);
      }
    }
    &.right {
      right: -50px;
      &::after {
        content: '';
        width: 10px;
        height: 10px;
        display: inline-block;
        border: 2px solid #ffffff;
        border-left-color: transparent;
        border-bottom-color: transparent;
        transform: rotate(45deg);
      }
    }
  }
}
</style>
