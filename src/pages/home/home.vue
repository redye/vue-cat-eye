<template>
  <div>
    <navigation-bar
      :bright="true"
      navigation-title="首页"
      center-bar-style="input"
      left-button-style="location"
      right-button-style="sign"
    />
  </div>
</template>

<script>

import NavigationBar from '../../components/header/navigation-bar'

export default {
  name: "Home",
  components: {
    NavigationBar
  },
  data: function() {
    return {}
  }
};
</script>

