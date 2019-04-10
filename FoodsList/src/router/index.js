import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home'
// import helloworld from '../components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: helloworld
    // },
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
