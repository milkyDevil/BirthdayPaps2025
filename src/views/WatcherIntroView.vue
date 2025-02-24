<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function startJourney() {
  router.push('/tesseract')
}
</script>

<template>
  <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-md md:max-w-2xl">
    <div class="md:flex">
      <div class="md:shrink-0">
        <img class="h-48 w-full object-cover md:h-full md:w-48" src="/src/assets/images/watcher.jpg"
          alt="Modern building architecture" />
      </div>
      <div class="p-8">
        <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
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
  <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-md md:max-w-2xl mt-4">
    <img class="h-48 w-full object-cover md:h-full md:w-48" src="/src/assets/images/pappuexploring.jpg"
      alt="Modern building architecture" />

  </div>
  <div
    class="mx-auto max-w-md overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-md md:max-w-2xl p-2 flex justify-center mt-4">
    <button @click="startJourney" class="px-6 py-2 bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition">
      Start Journey
    </button>
  </div>
</template>
