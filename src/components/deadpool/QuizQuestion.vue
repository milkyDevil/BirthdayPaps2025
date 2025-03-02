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

const props = defineProps<{ question: Question, imageQuizSrc: string, correctAnsSrc: string, wrongAnsSrc: string }>();
const emit = defineEmits<{
    (e: "answer", feedback: { text: string; image: string }, correct: boolean): void;
}>();

const selectedOption = ref<string | null>(null); // Track selected option

const selectAnswer = (option: Option) => {
    selectedOption.value = option.text; // Store selected option

    const feedbackImage = option.correct
        ? props.correctAnsSrc
        : props.wrongAnsSrc;

    emit("answer", { text: option.response, image: feedbackImage }, option.correct);
};

// Reset selected option when the question changes
watch(() => props.question, () => {
    selectedOption.value = null;
});
</script>

<template>
    <img :src="imageQuizSrc" alt="Deadpool" class="w-full rounded-t-xl" />
    <p class="text-lg font-semibold text-purple-600 dark:text-teal-600 px-2">
        {{ question.question }}
    </p>

    <div class="my-4 space-y-2 mx-2">
        <label v-for="(option, index) in question.options" :key="index"
            class="flex items-center space-x-3 p-3 border border-teal-400 dark:border-purple-400 rounded-lg cursor-pointer transition">
            <input type="radio" :value="option.text" v-model="selectedOption" class="hidden"
                @change="selectAnswer(option)" />
            <span class="text-purple-600 dark:text-teal-600">{{ option.text }}</span>
        </label>
    </div>
</template>
