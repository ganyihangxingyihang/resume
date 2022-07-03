<template>
  <div id="app">
    <my-header></my-header>

    <router-view></router-view>

    <svg class="svg-left" height="519" width="758" fill="#E1E1E1">
      <polygon class="pol" points="0,455,693,352,173,0,92,0,0,71" />
    </svg>
    <svg class="svg-right" height="536" width="633" fill="#c0e3e7">
      <polygon points="0,0,633,0,633,536" />
    </svg>
  </div>
</template>

<script>
import myHeader from './components/Header.vue'
import myHome from './Home.vue'
export default {
  components: {
    myHeader
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="less">
.svg-left {
  position: fixed;
  top: 0;
  z-index: -999;
}

.svg-right {
  position: fixed;
  top: -100px;
  right: -100px;
  z-index: -999;
}
</style>
