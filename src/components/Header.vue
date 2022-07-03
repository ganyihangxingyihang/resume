<template>
  <div class="resume-container">
    <div class="resume-header">
      <div class="header-right-box" ref="titleRef">
        <span>Chen’s Resume</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    $route(to, from) {
      if (to.path === '/pdf') {
        this.$refs.titleRef.style.margin = '0 0 0 494px'
      }
      if (to.path === '/introduce') {
        this.$refs.titleRef.style.margin = '0 0 0 320px'
      }
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and (min-width: 960px) {
  .resume-container {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Pacifico';
    font-size: 26px;

    .resume-header {
      width: 80%;
      height: 100%;
      display: flex;

      .header-right-box {
        display: flex;
        align-items: center;
        margin-left: 320px;
      }
    }
  }
}
</style>
