<template>
  <header class="bg-white shadow sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
      <h1 class="text-xl font-bold text-blue-600">🔎 상품비교사이트</h1>

      <nav class="hidden sm:flex items-center space-x-6 text-gray-600 relative">
        <router-link to="/" class="hover:text-blue-600">홈</router-link>
        <router-link to="/products" class="hover:text-blue-600">상품</router-link>

        <!-- 마이페이지 드롭다운 -->
        <div class="relative" @click="toggleDropdown">
          <button class="flex items-center gap-1 hover:text-blue-600 transition">
            <span>마이페이지</span>
          </button>

          <transition name="fade">
            <ul
              v-if="dropdownOpen"
              class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
            >
              <li>
                <router-link
                  to="/mypage/favorites"
                  class="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  찜 목록
                </router-link>
              </li>
              <li>
                <router-link
                  to="/mypage/profile"
                  class="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  회원 정보 수정
                </router-link>
              </li>
            </ul>
          </transition>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dropdownOpen = ref(false)

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

window.addEventListener('click', (e) => {
  const dropdown = document.querySelector('nav')
  if (dropdown && !dropdown.contains(e.target as Node)) {
    dropdownOpen.value = false
  }
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.15s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
