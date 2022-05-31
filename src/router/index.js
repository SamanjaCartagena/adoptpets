import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatView from '../views/CatView.vue'
import DogView from '../views/DogView.vue'
import PetView from '../views/PetView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cats',
      name: 'cats',
      component: CatView
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: DogView
    },
    {
      path: '/pets/:species/:id',
      name: 'pet',
      component: PetView
    }
  ]
})
