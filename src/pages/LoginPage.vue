<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
      <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <div class="text-center mb-6">
          <div class="text-4xl mb-2">🔐</div>
          <h1 class="text-2xl font-bold">상품 비교 서비스</h1>
        </div>
  
        <form @submit.prevent="handleLogin" class="space-y-4">
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
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            로그인
          </button>
        </form>
  
        <div class="my-4">
            <button
                @click="handleKakaoLogin"
                class="w-full flex items-center justify-center bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-bold py-2 rounded-md transition"
            >
                <img
                src="https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_medium_wide.png"
                alt="카카오 로그인"
                class="h-10"
                />
            </button>
        </div>

  
        <p class="text-sm text-gray-500 text-center">
          계정이 없으신가요?
          <a href="/signup" class="text-blue-500 hover:underline">회원가입</a>
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const email = ref('')
  const password = ref('')
  
  const handleLogin = () => {
    console.log('로그인 시도:', email.value, password.value)
    // 여기에 API 연결 예정
  }
  
  const handleKakaoLogin = () => {
    console.log('카카오 로그인 시도')
    // 여기에 카카오 로그인 연동 로직 추가 예정
  }
  </script>
  