import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/pages/LoginPage.vue'
import SignupPage from '@/pages/SignupPage.vue'
import ProductListPage from '@/pages/ProductListPage.vue'
import ProductDetailPage from '@/pages/ProductDetailPage.vue'
import FavoritesPage from '@/pages/FavoritesPage.vue'

const routes = [
  { path: '/login', component: LoginPage },
  { path: '/signup', component: SignupPage },
  { path: '/products', component: ProductListPage },
  { path: '/product/:id', component: ProductDetailPage, props: true },
  { path: '/mypage/favorites', component: FavoritesPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
