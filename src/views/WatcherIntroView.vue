<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function startJourney() {
  router.push('/tesseract')
}
</script>

<template>
  <div
    class="mx-auto max-w-md overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-md shadow-teal-500/50 dark:shadow-purple-500/50 md:max-w-2xl">
    <div class="md:flex">
      <div class="md:shrink-0">
        <img class="h-48 w-full object-cover md:h-full md:w-48" src="/src/assets/images/watcher.jpg"
          alt="Modern building architecture" />
      </div>
      <div class="p-8">
        <div class="text-sm font-semibold tracking-wide text-purple-600 dark:text-teal-600">
          In a universe full of choices, this man chosen by fate, unknowingly embarks on a journey across time...
        </div>
        <!-- <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
          Incredible accommodation for your team
        </a>
        <p class="mt-2 text-gray-500">
          Looking to take your team away on a retreat to enjoy awesome food and take in some
          sunshine? We have a list of places to do just that.
        </p> -->
      </div>
    </div>
  </div>
  <div
    class="mx-auto max-w-md overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-md shadow-teal-500/50 dark:shadow-purple-500/50 md:max-w-2xl mt-4">
    <img class="h-48 w-full object-cover md:h-full" src="/src/assets/images/pappuexploring.jpg"
      alt="Modern building architecture" />
    <div class="flex justify-center m-5">
      <button @click="startJourney"
        class="p-2 rounded-lg bg-transparent border border-dashed border-teal-500 dark:border-purple-500 text-purple-600 dark:text-teal-600 transition">
        Start Journey
      </button>
    </div>
  </div>
</template>
