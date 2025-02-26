<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

// Props
defineProps<{
    imageSrc: string;
    introText: string;
}>();

// Emits
const emit = defineEmits<{
    (e: "startQuiz"): void;
}>();
</script>

<template>
    <div
        class="mx-auto max-w-md overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-md md:max-w-2xl text-center">
        <img :src="imageSrc" alt="Deadpool" class="w-full rounded-t-xl" />
        <p class="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-4">
            {{ introText }}
        </p>
        <button @click="emit('startQuiz')"
            class="mt-6 px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition">
            Next →
        </button>
    </div>
</template>
