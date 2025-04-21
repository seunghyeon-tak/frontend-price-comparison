import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/pages/LoginPage.vue'
import SignupPage from '@/pages/SignupPage.vue'
import ProductListPage from '@/pages/ProductListPage.vue'

const routes = [
  { path: '/login', component: LoginPage },
  { path: '/signup', component: SignupPage },
  { path: '/products', component: ProductListPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
