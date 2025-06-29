<template>
  <div class="min-h-screen bg-gray-50">
    <Header />

    <!-- 검색창 -->
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

          <input
            v-model="searchInput"
            type="text"
            placeholder="검색어를 입력하세요"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-md text-base
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

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

    <!-- 상품 상세 영역 -->
    <div class="max-w-4xl mx-auto px-4 py-10">
      <div class="bg-white shadow-md rounded-xl overflow-hidden">
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-96 object-cover"
        />

        <div class="p-6">
          <h1 class="text-2xl font-bold text-gray-800 mb-4">{{ product.name }}</h1>

          <p class="text-lg text-gray-600 mb-6">
            {{ product.description }}
          </p>

          <p class="text-2xl text-blue-600 font-bold mb-6">
            {{ product.price.toLocaleString() }}원
          </p>

          <div class="flex gap-4">
            <button
              class="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition text-lg"
            >
              찜하기
            </button>
            <button
              class="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-md transition text-lg"
            >
              구매하기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import CategoryDropdown from '@/components/CategoryDropdown.vue'

const route = useRoute()
const router = useRouter()
const id = route.params.id as string

const product = ref({
  id: id,
  name: `테스트 상품 ${id}`,
  description: `상품 ${id}의 상세 설명입니다. 이곳에 상품에 대한 구체적인 정보와 특징을 기재할 수 있습니다.`,
  price: 1290000,
  image: 'https://via.placeholder.com/800x500?text=Product+Detail',
})

// 검색 상태
const selectedCategory = ref('')
const searchInput = ref('')
const keyword = ref('')
const category = ref('')

const onSearch = () => {
  keyword.value = searchInput.value.trim()
  category.value = selectedCategory.value
  // 검색 결과 페이지(상품 리스트)로 이동하면서 쿼리 파라미터 전달
  router.push({ name: 'ProductList', query: { keyword: keyword.value, category: category.value } })
}

onMounted(() => {
  // API 연동 필요 시 여기에서 호출
})
</script>
