import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueScrollactive from 'vue-scrollactive';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AOS from 'aos'
import './assets/scss/theme.scss';
import App from './App.vue'

Vue.use(VueScrollactive);
Vue.use(BootstrapVue)
library.add(fas, far, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')
