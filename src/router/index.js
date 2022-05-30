import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatView from '../views/CatView.vue'
import DogView from '../views/DogView.vue'
import PetView from '../views/PetView.vue'

Vue.use(VueRouter)

const routes = [
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
    path: '/pets',
    name: 'pets',
    component: PetView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
