// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
//App={template:"div",data(){return {}}}


import vDel from "./components/del.vue"
Vue.component("vDel", vDel)

// 1.通过export default 导出，通过import aa from "路径"
import aa from "./test"
aa()

import bb, { x, arr, fn1 } from "./test/a"
import "./test/b"
import "./css/app.css"


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App></App>'
})
