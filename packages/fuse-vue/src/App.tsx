import Vue from 'vue'
import Component from 'vue-class-component'

import Hello from './Hello'

@Component({
  components: {
    Hello,
  }
})
export default class extends Vue {
  propMessage: string = '123';

  render(h) {
    return (
      <div>
        {this.propMessage}
        <Hello msg="world" />
      </div>
    )
  }
}
