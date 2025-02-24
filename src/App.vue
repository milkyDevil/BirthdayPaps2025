<script setup lang="ts">
import { useThemeStore } from "@/stores/themeStore";
import { RouterView } from "vue-router";

const themeStore = useThemeStore();
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
    <header class="p-4 flex justify-between">
      <h1 class="text-lg font-bold">My Vue App</h1>
      <button @click="themeStore.toggleTheme()" class="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded">
        Toggle Dark Mode
      </button>
    </header>

    <RouterView />

  </div>
</template>

<style>
html {
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}
</style>
