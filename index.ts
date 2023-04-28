// possible salvation? https://dev.to/scottlepp/creating-a-search-app-with-vue--parcel--typescript-part-1-52f9
// test comment
import Vue from "vue";
import App from "./app.vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
    el: '#app',
    render: h => h(App)
  });
