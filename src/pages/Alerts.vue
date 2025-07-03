<template>
  <div class="min-h-screen bg-gray-50">
    <Header />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">가격 알림 관리</h2>

      <div class="overflow-x-auto bg-white rounded-xl shadow-md">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상품명</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">현재 가격</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">목표 가격</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">등록일</th>
              <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">관리</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="alert in alerts" :key="alert.id">
              <td class="px-6 py-4 whitespace-nowrap text-gray-800">{{ alert.productName }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-blue-600 font-bold">{{ alert.currentPrice.toLocaleString() }}원</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ alert.targetPrice.toLocaleString() }}원</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ alert.createdAt }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-center">
                <button
                  @click="deleteAlert(alert.id)"
                  class="text-red-500 hover:text-red-600 text-sm"
                >
                  삭제
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <p v-if="alerts.length === 0" class="text-center text-gray-500 py-10">등록된 알림이 없습니다.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/components/Header.vue'

const alerts = ref([
  {
    id: 1,
    productName: '애플 맥북 프로 14"',
    currentPrice: 2390000,
    targetPrice: 2000000,
    createdAt: '2025-06-29',
  },
  {
    id: 2,
    productName: 'LG 울트라 PC',
    currentPrice: 1290000,
    targetPrice: 1000000,
    createdAt: '2025-06-28',
  },
])

const deleteAlert = (id: number) => {
  if (confirm('해당 알림을 삭제하시겠습니까?')) {
    alerts.value = alerts.value.filter(alert => alert.id !== id)
  }
}
</script>
