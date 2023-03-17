import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

window.onload = () => {
  new Vue({
    el: '#app',
    data() {
      return {
        name: 'BootstrapVue',
        show: true
      }
    },
    watch: {
      show(newVal) {
        console.log('Alert is now ' + (newVal ? 'visible' : 'hidden'))
      }
    },
    methods: {
      toggle() {
        console.log('Toggle button clicked')
        this.show = !this.show
      },
      dismissed() {
        console.log('Alert dismissed')
      }
    }
  })
}