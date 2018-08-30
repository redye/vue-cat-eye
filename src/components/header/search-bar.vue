<template>
  <div class="search-container">
    <input class="search-input" type="text" placeholder="placeholder" value="value" @change="onValueChanged" />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: ['placeholder', 'defaultValue'],
  data: function () {
    return {
      value: this.defaultValue
    }
  },
  methods: {
    onValueChanged: function (e) {
      this.value = e.target.value
    }
  }
}
</script>

<style scoped>
.search-container {

}
.search-container {
  height: 3rem;
  border-radius: 1.5rem;
  background-color: #fff;
}
</style>


