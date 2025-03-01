<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps<{
    message: string;
    imageSrc: string;
}>();

const emit = defineEmits<{
    (e: "close"): void;
}>();
</script>

<template>
    <Teleport to="body">
        <div class="fixed inset-0 flex items-center justify-center bg-teal-600 dark:bg-purple-600 bg-opacity-50">
            <div
                class="mx-auto max-w-md rounded-xl bg-white dark:bg-gray-900 shadow-md shadow-teal-500/50 dark:shadow-purple-500/50 p-6 text-center">
                <img :src="imageSrc" alt="Deadpool" class="mx-auto mb-4 w-32 h-32 rounded-xl" />
                <p class="text-lg font-semibold text-purple-600 dark:text-teal-600">
                    {{ message }}
                </p>
                <button @click="emit('close')"
                    class="mt-4 px-4 py-2 rounded-lg bg-transparent border border-dashed border-teal-500 dark:border-purple-500 text-purple-600 dark:text-teal-600">
                    Close
                </button>
            </div>
        </div>
    </Teleport>
</template>
