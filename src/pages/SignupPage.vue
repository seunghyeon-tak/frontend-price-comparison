<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
      <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <div class="text-center mb-6">
          <h1 class="text-2xl font-bold">회원가입</h1>
        </div>
  
        <form @submit.prevent="handleSignup" class="space-y-4">
          <input
            v-model="email"
            type="email"
            placeholder="이메일"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            v-model="password"
            type="password"
            placeholder="비밀번호"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            v-model="confirmPassword"
            type="password"
            placeholder="비밀번호 확인"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
  
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            회원가입
          </button>
        </form>
  
        <p class="text-sm text-gray-500 text-center mt-4">
          이미 계정이 있으신가요?
          <a href="/login" class="text-blue-500 hover:underline">로그인</a>
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const name = ref('')
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  
  const handleSignup = () => {
    console.log('회원가입 시도:', name.value, email.value, password.value, confirmPassword.value)
  
    if (password.value !== confirmPassword.value) {
      alert('비밀번호가 일치하지 않습니다.')
      return
    }
  
    // 실제 회원가입 API 요청 연결 예정
  }
  </script>
  