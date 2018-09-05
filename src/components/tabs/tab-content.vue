<script>
export default {
  props: {
    panes: {
      type: Array,
      required: true
    }
  },
  render () {
    const content = this.panes.map(pane => {
      return pane.selected ? pane.$slots.default : null
    })
    return (
      <div class="tab-content-container">
        {content}
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
.tab-content-container {

}
</style>


