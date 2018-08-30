<template>
  <div>
    <navigation-bar navigation-title="首页" go-back="true" search="搜索">
      <!-- <search-bar name="searchBar"></search-bar> -->
    </navigation-bar>
  </div>
</template>

<script>

import NavigationBar from '../../components/header/navigation-bar'
import SearchBar  from '../../components/header/search-bar'

export default {
  name: "Home",
  components: {
    NavigationBar,
    SearchBar
  },
  data: function() {
    return {};
  }
};
</script>

