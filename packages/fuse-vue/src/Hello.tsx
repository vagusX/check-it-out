import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    msg: String
  }
})
export default class extends Vue {
  render(h) {
    return (
      <div>
        Hello {this.$props.msg}
      </div>
    )
  }
}
