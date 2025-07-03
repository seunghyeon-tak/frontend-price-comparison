<template>
  <div class="min-h-screen bg-gray-50">
    <Header />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">찜 목록</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="product in favorites"
          :key="product.id"
          class="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
        >
          <img :src="product.image" :alt="product.name" class="w-full h-40 object-cover rounded-md mb-4" />
          <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ product.name }}</h3>
          <p class="text-blue-600 font-bold text-lg">{{ product.price.toLocaleString() }}원</p>
          <div class="flex justify-end mt-3">
            <button
              class="text-red-500 hover:text-red-600 text-sm"
              @click="removeFavorite(product.id)"
            >
              찜 해제
            </button>
          </div>
        </div>
      </div>

      <p v-if="favorites.length === 0" class="text-center text-gray-500 mt-10">찜한 상품이 없습니다.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/components/Header.vue'

const favorites = ref([
  { id: 1, name: '애플 맥북 프로 14"', price: 2490000, image: 'https://via.placeholder.com/400x250?text=MacBook+Pro' },
  { id: 2, name: 'LG 울트라 PC', price: 1290000, image: 'https://via.placeholder.com/400x250?text=LG+PC' },
])

const removeFavorite = (id: number) => {
  favorites.value = favorites.value.filter((p) => p.id !== id)
}
</script>
