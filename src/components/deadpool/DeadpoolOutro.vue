<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

// Props
defineProps<{
    imageSrc: string;
    introText: string;
}>();

// Emits
const emit = defineEmits<{
    (e: "next"): void;
}>();
</script>

<template>
    <div
        class="mx-auto max-w-md min-h-screen overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-md shadow-teal-500/50 dark:shadow-purple-500/50 md:max-w-2xl text-center">
        <img :src="imageSrc" alt="Deadpool" class="w-full rounded-t-xl" />
        <p class="text-lg font-semibold text-purple-600 dark:text-teal-600 mt-4 px-2">
            {{ introText }}
        </p>
        <div class="flex justify-center m-5">
            <button @click="emit('next')"
                class="p-2 rounded-lg bg-transparent border border-dashed border-teal-500 dark:border-purple-500 text-purple-600 dark:text-teal-600 transition">
                Next →
            </button>
        </div>
    </div>
</template>
