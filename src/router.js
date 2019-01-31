import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Mission from './views/Mission.vue'
import Story from './views/Story.vue'
import Membership from './views/Membership.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mission',
      name: 'mission',
      component: Mission
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/Mission.vue')
    },
    {
      path: '/story',
      name: 'story',
      component: Story
    },
    {
      path: '/membership',
      name: 'membership',
      component: Membership
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
