<template>
  <div>movie</div>
</template>


<script>
export default {
  name: 'Movie',
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    nm: {
      type: String,
      required: false
    }
  },
  // data: function () {
  //   return this.$route.query
  // },
  mounted: function () {
    console.log(`query ==> ${JSON.stringify(this.$route.query)}`)
    console.log(`id => ${this.id}`)
  }
}
</script>
