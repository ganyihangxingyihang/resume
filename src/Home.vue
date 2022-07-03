<template>
  <div class="home-container">
    <div class="home-body">
      <my-avatar :class="{ avatarHide: hideAvatar }"></my-avatar>

      <router-view v-slot="{ Component, route }">
        <transition name="scale" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>

    <div class="routerLink-box">
      <!-- 切换到pdf简历router-link -->
      <router-link to="/pdf">
        <div class="tip-box" :class="{ tipBoxHide: hideIntroduceTipbox }" @click="switchPage">
          <!-- 点击添加动态class，该类css包含旋转动画，@animationend时间在动画完成后触发 -->
          <div class="switchBtn" :class="{ 'rotate-center': showAnimate }" @animationend="reset">
            <svg t="1655123125910" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2992" width="32" height="32">
              <path
                d="M234.666667 430.933333H128l85.333333-81.066666L345.6 213.333333l51.2 51.2-81.066667 81.066667H896V426.666667H234.666667v4.266666zM793.6 554.666667H896l-85.333333 81.066666-132.266667 132.266667-51.2-51.2 81.066667-81.066667H128V554.666667h665.6z"
                fill="#111111"
                p-id="2993"
              ></path>
            </svg>
          </div>
          <div class="tipMessage">切换到pdf简历</div>
        </div>
      </router-link>

      <!-- 切换到Introduce页面router-link -->
      <router-link to="/introduce">
        <div class="tip-box" :class="{ tipBoxHide: hidePdfTipbox }" @click="switchPage">
          <!-- 点击添加动态class，该类css包含旋转动画，@animationend时间在动画完成后触发 -->
          <div class="switchBtn" :class="{ 'rotate-center': showAnimate }" @animationend="reset">
            <svg t="1655123125910" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2992" width="32" height="32">
              <path
                d="M234.666667 430.933333H128l85.333333-81.066666L345.6 213.333333l51.2 51.2-81.066667 81.066667H896V426.666667H234.666667v4.266666zM793.6 554.666667H896l-85.333333 81.066666-132.266667 132.266667-51.2-51.2 81.066667-81.066667H128V554.666667h665.6z"
                fill="#111111"
                p-id="2993"
              ></path>
            </svg>
          </div>
          <div class="tipMessage">切换到web简历</div>
        </div>
      </router-link>
    </div>
    <!-- 下载pdf按钮 -->
    <div class="download" :class="{ loading: loading }" @click="downloadPdf">
      <!-- <a href="https://www.chenchenshao.com:8003/public/resume/1.pdf" -->
      <svg t="1656234602948" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2468" width="139" height="139">
        <path
          d="M498.346667 824.32L201.386667 527.36c-11.946667-11.946667-3.413333-34.133333 13.653333-34.133333H375.466667c11.946667 0 20.48-8.533333 20.48-20.48V54.613333c0-11.946667 8.533333-20.48 20.48-20.48h189.44c11.946667 0 20.48 8.533333 20.48 20.48v418.133334c0 11.946667 8.533333 20.48 20.48 20.48h160.426666c18.773333 0 27.306667 22.186667 13.653334 34.133333L525.653333 824.32c-6.826667 6.826667-20.48 6.826667-27.306666 0zM916.48 989.866667H107.52c-18.773333 0-35.84-15.36-35.84-35.84 0-18.773333 15.36-35.84 35.84-35.84h810.666667c18.773333 0 35.84 15.36 35.84 35.84-1.706667 20.48-17.066667 35.84-37.546667 35.84z"
          :fill="fill"
          p-id="2469"
        ></path>
      </svg>
      <!-- </a> -->
    </div>
  </div>
</template>

<script>
import { delay } from 'q'
import myAvatar from './components/Avatar.vue'
import myIntroduce from './components/Introduce.vue'

export default {
  components: {
    myAvatar,
    myIntroduce
  },

  created() {
    if (this.$route.path == '/pdf') {
      this.hideAvatar = true
      this.hidePdfTipbox = false
      this.hideIntroduceTipbox = true
    }
  },
  data() {
    return {
      showAnimate: false,
      hideAvatar: false,
      hideIntroduceTipbox: false,
      hidePdfTipbox: true,
      // 下载按钮颜色
      fill: '#8a8a8a',
      // 下载中样式
      loading: false
    }
  },
  methods: {
    switchPage() {
      this.showAnimate = !this.showAnimate
      this.hideAvatar = !this.hideAvatar
      // window.localStorage.setItem('hideAvatar', this.hideAvatar)
      this.hideIntroduceTipbox = !this.hideIntroduceTipbox
      // window.localStorage.setItem('hideIntroduceTipbox', this.hideIntroduceTipbox)
      this.hidePdfTipbox = !this.hidePdfTipbox
      // window.localStorage.setItem('hidePdfTipbox', this.hidePdfTipbox)
    },
    reset() {
      this.showAnimate = !this.showAnimate
    },
    // 下载pdf简历
    downloadPdf() {
      this.fill = '#1296db'
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.fill = '#8a8a8a'
      }, 2000)
      window.location.href = 'https://www.chenchenshao.com:8003/public/resume/1.pdf'

      // const xhr = new XMLHttpRequest()
      // xhr.open('get', 'https://www.chenchenshao.com:8003/public/resume/1.pdf')
      // xhr.send()
      // xhr.onreadystatechange = function () {
      //   if (xhr.readyState === 4) {
      //     console.log('11')
      //   }
    }
  }
}
</script>

<style lang="less" scoped>
// 头像隐藏和现实动画
.avatarHide {
  position: absolute;
  top: 0;
  left: 0;
  animation: translate-opacity ease-in 1s forwards;
  z-index: -1;
}

.tipBoxHide {
  display: none;
}

.home-container {
  width: 100%;
  display: flex;
  justify-content: center;

  .home-body {
    width: 80%;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  // 下载按钮样式
  .download {
    margin-top: 66px;
    margin-left: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    svg {
      width: 83%;
      height: 83%;
    }
  }

  .loading {
    position: relative;
  }

  .loading::before {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    border: 5px solid #f3f3f3;
    border-left: 5px solid #1296db;
    border-right: 5px solid #1296db;
    border-radius: 50%;
    animation: spin 3s linear forwards;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .tip-box {
    position: fixed;
    top: 20px;
    right: 40px;
    cursor: pointer;

    .switchBtn {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
    }
    .tipMessage {
      position: absolute;
      top: 66px;
      right: -100px;
      width: 110px;
      height: 20px;
      font-size: 12px;
      text-align: center;
      line-height: 20px;
      border: 2px solid #3a83be;
      border-radius: 8px;
      opacity: 0;
      transition: all 0.5s;
    }
  }

  .tip-box:hover .tipMessage {
    opacity: 1;
    right: -32px;
  }

  .rotate-center {
    // 旋转动画
    -webkit-animation: rotate-center 0.6s ease-in-out both;
    animation: rotate-center 0.6s ease-in-out both;
  }
  // 旋转动画
  @-webkit-keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
}

//avatar动画
@keyframes translate-opacity {
  0% {
    transform: scale(1) translate(0, 0);
    visibility: visible;
    opacity: 1;
  }
  // 25% {
  //   transform: scale(0.75);
  // }
  // 50% {
  //   transform: scale(0.5);
  // }
  // 75% {
  //   transform: scale(0.25);
  // }
  100% {
    transform: scale(0.1) translate(1500px, -200px);
    visibility: hidden;
    opacity: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transform: scale(1) translate(0, 0);
  visibility: visible;
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  transform: scale(0.1) translate(1500px, -200px);
  visibility: hidden;
  opacity: 0;
}

// 组件transition动画
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
