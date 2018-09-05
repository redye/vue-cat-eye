<script>
export default {
  name: 'Tab',
  props: {
    index: {
      type: [String, Number],
      required: true
    },
    title: {
      type: String,
      default: 'tab'
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    active: function () {
      return this.selected
    }
  },
  methods: {
    onClick: function() {
      this.$emit('click', this.index)
    }
  },
  mounted () {
    this.$parent.panes && this.$parent.panes.push(this)
  },
  render () {
    const tabClass = {
      tab: true,
      active: this.active
    }
    const tab = this.$slots.label || <span class={this.active ? 'tab-text' : null}>{this.title}</span>
    return (
      <li class={tabClass} on-click={this.onClick}>
        {tab}
      </li>
    )
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/layout.scss';

.tab {
  list-style: none;
  line-height: 2.5rem;
  bottom: -4px;
  &.active {
    border-bottom: 4px solid $red;
  }
}
.tab-text {
  color: $red;
}
</style>

