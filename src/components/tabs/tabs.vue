<script>
import TabContent from './tab-content'

export default {
  name: 'Tabs',
  components: {
    TabContent
  },
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    showStyle: {
      type: String,
      default: 'top' // top | bottom
    }
  },
  data: function () {
    return {
      panes: []
    }
  },
  computed: {
    active: function () {
      return true
    }
  },
  render () {
    if (this.showStyle === 'top') {
      return (
        <div class="tabs-container">
          <div class="tabs-header-container">
            <ul class="tabs-header">
              {this.$slots.default}
            </ul>
          </div>
          <tab-content panes={this.panes}></tab-content>
        </div>
      )
    } else {
      return (
        <div class="tabs-container">
          <tab-content panes={this.panes}></tab-content>
          <div class="tabs-header-container">
            <ul class="tabs-header">
              {this.$slots.default}
            </ul>
          </div>
        </div>
      )
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../../assets/style/layout.scss';

.tabs-container {
  width: 100%;
  .tabs-header-container {
    border-bottom: solid $lineHeight $lineColor;
    .tabs-header {
      display: flex;
      justify-content: space-around;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
}
</style>


