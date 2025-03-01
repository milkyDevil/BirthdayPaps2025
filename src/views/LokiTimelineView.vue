<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from 'vue-router'
import DeadpoolIntro from "@/components/deadpool/DeadpoolIntro.vue";
import LokiIntroQuery from "@/components/loki/LokiIntroQuery.vue";
import QuizQuestion from "@/components/deadpool/QuizQuestion.vue";
import FeedbackModal from "@/components/deadpool/FeedbackModal.vue";
import DeadpoolOutro from "@/components/deadpool/DeadpoolOutro.vue";
import { lokiDialogue, questions } from "@/constants/loki";

const router = useRouter()

const step = ref<"intro" | "introQuery" | "quiz" | "outro" | "ageQuery" | "farewell">("intro");
const currentQuestionIndex = ref(0);
const showModal = ref(false);
const feedbackText = ref("");
const feedbackImage = ref("");
const isCorrect = ref(false);

const handleStartIntroQuery = () => {
  step.value = "introQuery";
};

const handleIntroResponse = (feedback: { text: string; image: string }) => {
  feedbackText.value = feedback.text;
  feedbackImage.value = feedback.image;
  showModal.value = true;
};

const handleStartQuiz = () => {
  feedbackText.value = '';
  feedbackImage.value = '';
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
  step.value = "ageQuery";
};

const handleNextFinal = () => {
  step.value = "farewell";
};

const handleNextPage = () => {
  router.push('/happybirthday')
};
</script>

<template>
  <div class="">
    <DeadpoolIntro v-if="step === 'intro'" :imageSrc="lokiDialogue.meetSrc" :introText="lokiDialogue.meet"
      @start-quiz="handleStartIntroQuery" />
    <div
      class="mx-auto max-w-md min-h-screen rounded-xl bg-white dark:bg-gray-900 shadow-md shadow-teal-500/50 dark:shadow-purple-500/50 md:max-w-2xl"
      v-else-if="step === 'introQuery'">
      <LokiIntroQuery :imageSrc="lokiDialogue.meetQuestionSrc" :ques="lokiDialogue.quizPrompt"
        :res="lokiDialogue.quizResponses" @start-quiz="handleIntroResponse" />
      <button
        class="mt-4 px-4 py-2 bg-transparent border border-dashed border-teal-500 dark:border-purple-500 text-purple-600 dark:text-teal-600 rounded-lg mx-2"
        @click="handleStartQuiz">
        Next
      </button>
    </div>
    <div
      class="mx-auto max-w-md min-h-screen rounded-xl bg-white dark:bg-gray-900 shadow-md shadow-teal-500/50 dark:shadow-purple-500/50  md:max-w-2xl"
      v-else-if="step === 'quiz'">
      <QuizQuestion :question="questions[currentQuestionIndex]" @answer="handleAnswer" />

      <button v-if="isCorrect"
        class="mt-4 px-4 py-2 bg-transparent border border-dashed border-teal-500 dark:border-purple-500 text-purple-600 dark:text-teal-600 rounded-lg mx-2"
        @click="nextQuestion">
        Next
      </button>
    </div>
    <DeadpoolOutro v-else-if="step === 'outro'" @next="handleNext" :imageSrc="lokiDialogue.finalWordsSrc"
      :introText="lokiDialogue.finalWords" />
    <div
      class="mx-auto max-w-md min-h-screen rounded-xl bg-white dark:bg-gray-900 shadow-md shadow-teal-500/50 dark:shadow-purple-500/50 md:max-w-2xl"
      v-else-if="step === 'ageQuery'">
      <LokiIntroQuery :imageSrc="lokiDialogue.finalWordsSrc" :ques="lokiDialogue.ageQuestion"
        :res="lokiDialogue.ageResponses" @start-quiz="handleIntroResponse" />
      <button
        class="mt-4 px-4 py-2 bg-transparent border border-dashed border-teal-500 dark:border-purple-500 text-purple-600 dark:text-teal-600 rounded-lg mx-2"
        @click="handleNextFinal">
        Next
      </button>
    </div>
    <DeadpoolIntro v-if="step === 'farewell'" :imageSrc="lokiDialogue.goodbyeSrc"
      :introText="lokiDialogue.finalFarewell" @start-quiz="handleNextPage" />

    <Teleport to="body">
      <FeedbackModal v-if="showModal" :message="feedbackText" :imageSrc="feedbackImage" @close="closeModal" />
    </Teleport>
  </div>
</template>
