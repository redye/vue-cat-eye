<template>
  <div class="input-container">
    <img class="icon_search" src="../../assets/images/search_gray.png" />
    <input
      class="input"
      type="text"
      :placeholder="placeholder"
      v-model="value"
      @change="onValueChanged"
      @focus="onInputFocus"
    />
  </div>
</template>

<script>
export default {
  name: 'InputBar',
  props: ['placeholder', 'defaultValue'],
  data: function () {
    return {
      value: this.defaultValue
    }
  },
  methods: {
    onValueChanged: function (e) {
      // this.value = e.target.value
      console.log(`value => ${this.value}`)
    },
    onInputFocus: function() {
      console.log(`获取焦点`)
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../../assets/style/layout.scss';

.input-container {
  width: 100%;
  height: 2rem;
  margin: 0 0.5rem;
  display: flex;
  flex: 1;
  align-items: center;
  @include borderRadius(1rem);
  overflow: hidden;
  background-color: #fff;
  input {
    display: flex;
    flex: 1;
    font-size: 1rem;
    line-height: 2rem;
    margin-left: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .icon_search {
    width: 1rem;
    height: 1rem;
    margin-left: 0.5rem;
  }
}
</style>
