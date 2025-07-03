<template>
  <div class="min-h-screen bg-gray-50">
    <Header />

    <div class="max-w-xl mx-auto px-4 py-10 bg-white rounded-xl shadow-md">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">회원 정보 수정</h2>

      <form @submit.prevent="updateNickname" class="space-y-6">
        <div>
          <label class="block text-gray-700 mb-1" for="nickname">닉네임</label>
          <input
            id="nickname"
            v-model="nickname"
            type="text"
            class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition text-lg"
        >
          닉네임 저장
        </button>
      </form>

      <div class="mt-8 border-t pt-6">
        <button
          @click="withdrawAccount"
          class="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition text-lg"
        >
          계정 탈퇴
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/components/Header.vue'

const nickname = ref('홍길동')

const updateNickname = () => {
  console.log('수정된 닉네임:', nickname.value)
  alert('닉네임이 저장되었습니다.')
  // 실제 API 연동 시:
  // axios.post('/api/v1/user/nickname', { nickname: nickname.value })
  //   .then(() => alert('닉네임이 저장되었습니다.'))
  //   .catch(err => console.error(err))
}

const withdrawAccount = () => {
  if (confirm('정말로 계정을 탈퇴하시겠습니까?')) {
    console.log('계정 탈퇴 진행')
    alert('계정이 탈퇴되었습니다.')
    // 실제 API 연동 시:
    // axios.delete('/api/v1/user')
    //   .then(() => alert('계정이 탈퇴되었습니다.'))
    //   .catch(err => console.error(err))
  }
}
</script>
