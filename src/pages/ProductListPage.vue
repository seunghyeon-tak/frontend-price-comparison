<template>
  <div class="min-h-screen bg-gray-50">
    <Header />

    <div class="bg-white py-6 shadow-sm">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <form @submit.prevent="onSearch" class="flex items-center gap-2 max-w-3xl mx-auto">
          <CategoryDropdown
            v-model="selectedCategory"
            :options="[
              { label: '전체', value: '' },
              { label: '노트북', value: '노트북' },
              { label: '모니터', value: '모니터' },
              { label: '키보드', value: '키보드' }
            ]"
          />

          <!-- 검색 입력창 -->
          <input
            v-model="searchInput"
            type="text"
            placeholder="검색어를 입력하세요"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-md text-base
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <!-- 검색 버튼 (돋보기) -->
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-4.35-4.35m1.9-5.4a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>

      </div>
    </div>


    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 class="text-xl font-semibold text-gray-700 mb-6">
        {{ keyword ? `'${keyword}' 검색 결과` : '전체 상품' }}
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
        >
          <img :src="product.image" :alt="product.name" class="w-full h-40 object-cover rounded-md mb-4" />
          <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ product.name }}</h3>
          <p class="text-blue-600 font-bold text-lg">{{ product.price.toLocaleString() }}원</p>
          <button
            class="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            @click="goToDetail(product.id)"
          >
            상세 보기
          </button>
        </div>
      </div>

      <p v-if="filteredProducts.length === 0" class="text-center text-gray-500 mt-10">검색 결과가 없습니다.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import CategoryDropdown from '@/components/CategoryDropdown.vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const selectedCategory = ref('')
const searchInput = ref('')
const keyword = ref('')
const category = ref('')
const router = useRouter()

const onSearch = () => {
  keyword.value = searchInput.value.trim()
  category.value = selectedCategory.value
}

const products = ref([
  { id: 1, name: '애플 맥북 프로 14"', price: 2490000, image: 'https://via.placeholder.com/400x250?text=MacBook+Pro' },
  { id: 2, name: 'LG 울트라 PC', price: 1290000, image: 'https://via.placeholder.com/400x250?text=LG+PC' },
  { id: 3, name: '삼성 갤럭시북', price: 990000, image: 'https://via.placeholder.com/400x250?text=Galaxy+Book' },
  { id: 4, name: 'HP 파빌리온', price: 890000, image: 'https://via.placeholder.com/400x250?text=HP+Laptop' },
])

const filteredProducts = computed(() =>
  keyword.value
    ? products.value.filter((p) =>
        p.name.toLowerCase().includes(keyword.value.toLowerCase()),
      )
    : products.value
)

const goToDetail = (productId: number) => {
  router.push(`/product/${productId}`)
}
</script>
