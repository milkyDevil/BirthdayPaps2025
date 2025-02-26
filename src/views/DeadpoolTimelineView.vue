<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from 'vue-router'
import DeadpoolIntro from "@/components/deadpool/DeadpoolIntro.vue";
import QuizQuestion from "@/components/deadpool/QuizQuestion.vue";
import FeedbackModal from "@/components/deadpool/FeedbackModal.vue";
import DeadpoolOutro from "@/components/deadpool/DeadpoolOutro.vue";
import { deadpoolDialogue, questions } from "@/constants/deadpool";

const router = useRouter()

const step = ref<"intro" | "quiz" | "outro">("intro");
const currentQuestionIndex = ref(0);
const showModal = ref(false);
const feedbackText = ref("");
const feedbackImage = ref("");
const isCorrect = ref(false);

const handleStartQuiz = () => {
  step.value = "quiz";
};

const handleAnswer = (feedback: { text: string; image: string }, correct: boolean) => {
  feedbackText.value = feedback.text;
  feedbackImage.value = feedback.image;
  isCorrect.value = correct;
  showModal.value = true;
};


const nextQuestion = () => {
  if (currentQuestionIndex.value < questions.length - 1) {
    currentQuestionIndex.value++;
    showModal.value = false;
    isCorrect.value = false; // Reset correctness
    feedbackText.value = '';
    feedbackImage.value = '';
  } else {
    step.value = "outro"; // Handle end of quiz
  }
};

const closeModal = () => {
  showModal.value = false;
};

const handleNext = () => {
  router.push('/loki')
};
</script>

<template>
  <div class="">
    <DeadpoolIntro v-if="step === 'intro'" :imageSrc="deadpoolDialogue.meetSrc" :introText="deadpoolDialogue.meet"
      @start-quiz="handleStartQuiz" />
    <div class="mx-auto max-w-md rounded-xl bg-white dark:bg-gray-900 shadow-md md:max-w-2xl p-6"
      v-else-if="step === 'quiz'">
      <QuizQuestion :question="questions[currentQuestionIndex]" @answer="handleAnswer" />

      <button v-if="isCorrect" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        @click="nextQuestion">
        Next
      </button>
    </div>
    <DeadpoolOutro v-else @next="handleNext" :imageSrc="deadpoolDialogue.goodbyeSrc"
      :introText="deadpoolDialogue.goodbye" />

    <Teleport to="body">
      <FeedbackModal v-if="showModal" :message="feedbackText" :imageSrc="feedbackImage" @close="closeModal" />
    </Teleport>
  </div>
</template>
