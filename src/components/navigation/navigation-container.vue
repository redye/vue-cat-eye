<template>
  <div class="navigation-contianer" :class="{bright: bright}" :style="navigationStyle">
    <div class="navigation-top"></div>
    <div class="navigation-bottom">
      <div class="navigation-side-container">
        <slot name="navigationLeft"></slot>
      </div>
      <div class="navigation-center-container">
        <slot name="navigationCenter"></slot>
      </div>
      <div class="navigation-side-container">
        <slot name="navigationRight"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      bright: {
        type: Boolean,
        default: false
      }
    },
    data: function () {
      return {
        navigationStyle: {
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

@import '../../assets/style/layout.scss';

.navigation-contianer {
  width: 100%;
  border-bottom: solid $lineHeight $lineColor;
  background-color: $navigationColor;
}
.bright {
  background-color: $red;
  border-bottom: solid 0 $lineColor;
}
.navigation-top {
  height: 1.25rem;
  width: 100%;
}
.navigation-bottom {
  height: 2.75rem;
  width: 100%;
}
.navigation-side-container {
  width: 20%;
  height: 100%;
  float: left;
}
.navigation-center-container {
  float: left;
  width: 60%;
  height: 100%;
}
</style>

