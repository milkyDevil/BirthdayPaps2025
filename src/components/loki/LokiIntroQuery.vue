<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

// Props
defineProps<{
    imageSrc: string;
    ques: string;
    res: any;
}>();

// Emits
const emit = defineEmits<{
    (e: "start-quiz", feedback: { text: string; image: string }): void;
}>();

const selectAnswer = (value: string) => {
    const feedbackImage = "/src/assets/images/watcher.jpg";

    emit("start-quiz", { text: value, image: feedbackImage });
};
</script>

<template>

    <img :src="imageSrc" alt="Deadpool" class="w-full rounded-t-xl" />
    <p class="text-lg font-semibold text-purple-600 dark:text-teal-600 mt-4 px-2">
        {{ ques }}
    </p>
    <div class="my-4 space-y-2 px-2">
        <label v-for="(value, key) in res" :key="key"
            class="flex items-center space-x-3 p-3 border border-teal-400 dark:border-purple-400 rounded-lg cursor-pointer transition">
            <input type="radio" :value="value" class="hidden" @change="selectAnswer(value)" />
            <span class="text-purple-600 dark:text-teal-600">{{ key }}</span>
        </label>
    </div>

</template>
