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
        <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div class="mx-auto max-w-md rounded-xl bg-white dark:bg-gray-900 shadow-lg p-6 text-center">
                <img :src="imageSrc" alt="Deadpool" class="mx-auto mb-4 w-32 h-32" />
                <p class="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {{ message }}
                </p>
                <button @click="emit('close')" class="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                    Close
                </button>
            </div>
        </div>
    </Teleport>
</template>
