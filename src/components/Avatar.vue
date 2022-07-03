<template>
  <div class="Avatar-container">
    <!-- 头像 -->
    <div class="avatar-box">
      <img src="../assets/imgs/avatar.jpg" alt="" />
    </div>

    <!-- 名字 -->
    <div class="name-box">
      <span>陈 少 聪</span>
    </div>
    <div class="contact">19937166264|csc522684186@163.com</div>

    <!-- 职位 -->
    <div class="position"><span>求职意向</span> 前端开发</div>

    <!-- 各种链接 -->
    <div class="ChenWeb">
      <div class="logo-box">
        <span class="tip">Bolg</span>
        <svg @click="gotoBlog" t="1654868313858" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22672" width="18" height="18">
          <path
            d="M957.824 384l-57.408 0c-35.168 0-65.984-29.728-68.384-64l0 0c0-182.656-147.264-320-331.2-320l-167.84 0c-183.808 0-332.864 148-332.992 330.656l0 362.784c0 182.656 149.184 330.528 332.992 330.528l358.432 0c183.936 0 332.608-147.872 332.608-330.528l0-234.368c0-36.512-29.44-75.072-66.208-75.072zM320.032 256l192 0c35.2 0 64 28.8 64 64s-28.8 64-64 64l-192 0c-35.2 0-64-28.8-64-64s28.8-64 64-64zM704.032 768l-384 0c-35.2 0-64-28.8-64-64s28.8-64 64-64l384 0c35.2 0 64 28.8 64 64s-28.8 64-64 64z"
            p-id="22673"
            :fill="fill"
          ></path>
        </svg>
      </div>
      <div class="logo-box">
        <span class="tip">Gitee</span>
        <svg @click="gotoGitee" t="1654868235440" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21703" width="22" height="22">
          <path
            d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z"
            :fill="fill"
            p-id="21704"
          ></path>
        </svg>
      </div>

      <div class="logo-box">
        <span class="tip">Github</span>
        <svg @click="gotoGithub" t="1654866287177" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19599" width="24" height="24">
          <path
            d="M512 64C264.6 64 64 269.8 64 523.4c0 203 128.4 375 306.4 435.8 2.8 0.6 5.2 0.8 7.6 0.8 16.6 0 23-12.2 23-22.8 0-11-0.4-39.8-0.6-78.2-16.8 3.8-31.8 5.4-45.2 5.4-86.2 0-105.8-67-105.8-67-20.4-53-49.8-67.2-49.8-67.2-39-27.4-0.2-28.2 2.8-28.2h0.2c45 4 68.6 47.6 68.6 47.6 22.4 39.2 52.4 50.2 79.2 50.2 21 0 40-6.8 51.2-12 4-29.6 15.6-49.8 28.4-61.4-99.4-11.6-204-51-204-227 0-50.2 17.4-91.2 46-123.2-4.6-11.6-20-58.4 4.4-121.6 0 0 3.2-1 10-1 16.2 0 52.8 6.2 113.2 48.2 35.8-10.2 74-15.2 112.2-15.4 38 0.2 76.4 5.2 112.2 15.4 60.4-42 97-48.2 113.2-48.2 6.8 0 10 1 10 1 24.4 63.2 9 110 4.4 121.6 28.6 32.2 46 73.2 46 123.2 0 176.4-104.8 215.2-204.6 226.6 16 14.2 30.4 42.2 30.4 85 0 61.4-0.6 111-0.6 126 0 10.8 6.2 23 22.8 23 2.4 0 5.2-0.2 8-0.8C831.8 898.4 960 726.2 960 523.4 960 269.8 759.4 64 512 64z"
            p-id="19600"
            :fill="fill"
          ></path>
        </svg>
      </div>
      <div class="logo-box">
        <span class="tip">Email</span>
        <svg @click="gotoEmail" t="1654868170693" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21422" width="22" height="22">
          <path d="M149.6 171.8h691.9c47.2 0 85.9 37.7 86.5 83.9L495.7 493 63.5 256c0.4-46.4 38.8-84.2 86.1-84.2z m-86.1 175l-0.4 419.6c0 46.7 38.9 84.9 86.5 84.9h691.9c47.6 0 86.5-38.2 86.5-84.9V346.6L505.9 572.8c-6.5 3.5-14.3 3.5-20.7 0l-421.7-226z" p-id="21423" :fill="fill"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // svg图颜色
      fill: '#111111'
    }
  },
  methods: {
    gotoBlog() {
      window.open('https://www.chenchenshao.com', '_blank')
    },
    gotoGitee() {
      window.open('https://gitee.com/chenchenshao', '_blank')
    },
    gotoGithub() {
      window.open('https://github.com/ganyihangxingyihang', '_blank')
    },
    gotoEmail() {
      window.open('https://mail.163.com', '_blank')
    }
  }
}
</script>

<style lang="less" scoped>
.Avatar-container {
  width: 260px;
  height: 360px;
  text-align: center;
  padding: 10px;
  background-color: #c0e3e7;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25), 10px 8px 16px -8px rgba(0, 0, 0, 0.3);
  font-family: Microsoft YaHei, STKaiti;
  .avatar-box {
    width: 240px;
    height: 240px;
    overflow: hidden;
    margin: 15px 0;
    color: #010101;
    text-shadow: none;
    img {
      height: 100%;
    }
  }

  .name-box {
    width: 195px;
    height: 25px;
    font-size: 23px;
    line-height: 25px;
    color: inherit;
    font-weight: bold;
    margin: 10px 0 0px 0;
  }

  .contact {
    font-size: 14px;
    margin-top: 5px;
    margin-bottom: 10px;
  }

  .position {
    width: 195px;
    padding: 5px 0;
    color: rgb(85, 96, 98);
  }

  .ChenWeb {
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 15px 0 10px 0;
    font-size: 8px;

    .logo-box {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 26px;
      height: 26px;
      cursor: pointer;
    }

    .logo-box:hover span {
      visibility: visible;
    }
    .logo-box:hover svg path {
      fill: #8a8a8a;
    }

    .tip {
      display: block;
      width: 50px;
      height: 16px;
      line-height: 16px;
      font-size: 8px;
      background-color: white;
      opacity: 0.8;
      visibility: hidden;
    }

    .logo-box span {
      position: absolute;
      top: -26px;
      left: -15px;
    }
    // span:nth-child(1) {
    //   position: absolute;
    //   top: -26px;
    //   left: -30px;
    // }
    // span:nth-child(2) {
    //   position: absolute;
    //   top: -26px;
    //   left: 20px;
    // }
    // span:nth-child(3) {
    //   position: absolute;
    //   top: -26px;
    //   left: 60px;
    // }
    // span:nth-child(4) {
    //   position: absolute;
    //   top: -26px;
    //   left: 100px;
    // }
  }
}
</style>
