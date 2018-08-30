<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
import svgIcon  from './components/common/svg'
export default {
  name: 'App',
  components: {
    svgIcon
  },
}
</script>

<style lang="scss">

  @import './assets/style/layout.scss';
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }

  .route-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }

</style>
