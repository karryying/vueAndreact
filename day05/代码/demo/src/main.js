// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//非父子
Vue.prototype.Event=new Vue()


//jq 
import $ from "jquery"
Vue.prototype.$=$


//animate.css
import "animate.css"


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
