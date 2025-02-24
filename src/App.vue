<script setup lang="ts">
import { useThemeStore } from "@/stores/themeStore";
import Sun from "@/components/icons/IconSun.vue";
import Moon from "@/components/icons/IconMoon.vue";

const themeStore = useThemeStore();

// Ensure theme is set on page load
themeStore.initTheme();
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
    <!-- Floating Theme Toggle Button -->
    <button
      class="fixed top-4 right-4 w-10 h-10 p-2 z-50 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full"
      @click="themeStore.toggleTheme">
      <Sun v-if="!themeStore.isDark" class="w-6 h-6 text-black" />
      <Moon v-else class="w-6 h-6 text-white" />
    </button>

    <!-- Router View -->
    <div class="max-w-4xl mx-auto p-4">
      <router-view />
    </div>
  </div>
</template>
