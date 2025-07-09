import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Courses from '../views/Courses.vue'
import Contact from '../views/Contact.vue'
import TeacherProfile from '../views/TeacherProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/teacher',
    name: 'TeacherProfile',
    component: TeacherProfile
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router