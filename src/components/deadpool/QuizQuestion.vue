<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from "vue";

interface Option {
    text: string;
    correct: boolean;
    response: string;
}

interface Question {
    id: number;
    question: string;
    options: Option[];
}

const props = defineProps<{ question: Question }>();
const emit = defineEmits<{
    (e: "answer", feedback: { text: string; image: string }, correct: boolean): void;
}>();

const selectedOption = ref<string | null>(null); // Track selected option

const selectAnswer = (option: Option) => {
    selectedOption.value = option.text; // Store selected option

    const feedbackImage = option.correct
        ? "/src/assets/images/watcher.jpg"
        : "/src/assets/images/watcher.jpg";

    emit("answer", { text: option.response, image: feedbackImage }, option.correct);
};

// Reset selected option when the question changes
watch(() => props.question, () => {
    selectedOption.value = null;
});
</script>

<template>
    <p class="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {{ question.question }}
    </p>
    <div class="mt-4 space-y-2">
        <label v-for="(option, index) in question.options" :key="index"
            class="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
            <input type="radio" :value="option.text" v-model="selectedOption" class="hidden"
                @change="selectAnswer(option)" />
            <span class="text-gray-900 dark:text-gray-100">{{ option.text }}</span>
        </label>
    </div>
</template>
