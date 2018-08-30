<template>
  <div class="navigation-contianer">
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

<style lang="scss" scoped>
.navigation-contianer {
  width: 100%;
}
.navigation-top {
  height: 2rem;
  width: 100%;
}
.navigation-bottom {
  height: 4.4rem;
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

