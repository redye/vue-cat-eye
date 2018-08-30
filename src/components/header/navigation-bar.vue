<template>
  <div id="navigation">
    <navigation-container>
      <div slot="navigationLeft" class="navigation-content-container" v-if="goBack" @click="$router.go(-1)">
        <div class="navigation-goback">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <polyline points="10,2 1,11 10,20" style="fill:none;stroke:rgb(51,51,51);stroke-width:2"/>
          </svg>
        </div>
      </div>
      <div slot="navigationCenter" class="navigation-content-container" v-if="navigationTitle">
        <span class="navigation-title">{{navigationTitle}}</span>
      </div>
      <div slot="navigationRight" class="navigation-content-container" v-if="search">
        <span class="navigation-search">{{search}}</span>
      </div>
    </navigation-container>
  </div>
</template>

<script>

import NavigationContainer from './navigation-container'

export default {
  name: 'Navigation',
  components: {
    NavigationContainer
  },
  props: ['goBack', 'navigationTitle', 'search'],
  data: function () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/base.scss';
.navigation-content-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navigation-goback {
  width: 2rem;
  height: 2rem;
}
.navigation-title {
  font-size: 1.6rem;
  color: $textColor;
}
.navigation-search {
  font-size: 1.6rem;
  color: $textColorLight;
}
</style>



