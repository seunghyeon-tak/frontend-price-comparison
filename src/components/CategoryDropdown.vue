<template>
    <div class="relative w-40">
      <button
        @click="toggleDropdown"
        class="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 flex items-center justify-between hover:bg-gray-100"
      >
        {{ selectedLabel }}
        <svg
          class="w-4 h-4 ml-2 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
  
      <ul
        v-if="isOpen"
        class="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md text-sm text-gray-700"
      >
        <li
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
          class="px-4 py-2 hover:bg-blue-100 cursor-pointer"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch, defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    modelValue: String,
    options: {
      type: Array as () => { label: string; value: string }[],
      required: true
    }
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const isOpen = ref(false)
  const selectedLabel = ref('전체')
  
  watch(
    () => props.modelValue,
    (val) => {
      const match = props.options.find(o => o.value === val)
      selectedLabel.value = match ? match.label : '전체'
    },
    { immediate: true }
  )
  
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value
  }
  
  const selectOption = (option: { label: string; value: string }) => {
    emit('update:modelValue', option.value)
    isOpen.value = false
  }
  </script>
  
  <style scoped>
  li:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
  </style>
  