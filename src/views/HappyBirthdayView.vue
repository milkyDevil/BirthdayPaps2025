<script setup lang="ts">
import { ref } from "vue";

const step = ref(1);

const handleHeart = () => {
    step.value = -1; // Temporary state to trigger fade-out
};

const handleHeartClick = () => {
    step.value = 3; // Move to the final step when heart is clicked
};

const afterLeaveStep1 = () => {
    step.value = 2; // Set Step 2 only after Step 1 has fully disappeared
};
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900  p-6">

        <!-- Step 1: Initial Message (Fades Out) -->
        <transition name="fade" @after-leave="afterLeaveStep1">
            <div v-if="step === 1" class="text-center overflow-hidden">
                <img src="/images/together.jpg" alt="Deadpool" class="w-full rounded-t-xl" />
                <p class="text-xl text-center mb-4 text-purple-600 dark:text-teal-600">
                    “Finally you are back. You’ve mastered time, space, and mischief… I knew you could do it, so I
                    accepted the challenge from
                    Thanos. But your greatest reward is right here—me.”
                </p>
                <!-- Clickable Heart (Blinks until Clicked) -->
                <button @click="handleHeart"
                    class="my-6 text-4xl transition-transform transform hover:scale-125 animate-custom-pulse">
                    ❤️
                </button>
            </div>
        </transition>

        <!-- Step 2: Birthday Message (Fades In) -->
        <transition name="fade">
            <div v-if="step === 2 || step === 3" class="text-center">
                <p class="text-2xl font-semibold text-purple-600 dark:text-teal-600">"Happy Birthday, My Love. ❤️"</p>
                <p class="text-lg mt-2 text-teal-600 dark:text-purple-600">"I love you… till I have an atom of mine
                    left."</p>

                <!-- Clickable Heart (Blinks until Clicked) -->
                <button @click="handleHeartClick" class="mt-6 text-4xl transition-transform transform hover:scale-125"
                    :class="{ 'animate-custom-pulse': step === 2 }">
                    {{ step === 3 ? '💜' : '❤️' }}
                </button>
            </div>
        </transition>

        <!-- Step 3: Final Message (Fades In with a Pop Animation) -->
        <transition name="pop-fade">
            <p v-if="step === 3" class="mt-4 text-lg text-center text-teal-600 dark:text-purple-600">
                Even across infinite timelines, I’d always find my way to you.
            </p>
        </transition>

        <!-- Home Icon (Fades in with Smooth Appearance) -->
        <!-- <transition name="fade"> -->
        <router-link to="/loki" class="fixed bottom-4 left-4 text-gray-400 hover:text-white transition text-2xl">
            ⬅️
        </router-link>

        <router-link to="/" class="fixed bottom-4 right-4 text-gray-400 hover:text-white transition text-2xl">
            ➡️
        </router-link>

        <!-- </transition> -->

    </div>
</template>

<style>
/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s ease-in-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

/* Pop Effect for Final Message */
.pop-fade-enter-active {
    animation: popFadeIn 0.8s ease-out;
}

@keyframes popFadeIn {
    0% {
        opacity: 0;
        transform: scale(0.8);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}

/* Custom Heart Pulse Animation */
@keyframes custom-pulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.5);
    }

    100% {
        transform: scale(1);
    }
}

.animate-custom-pulse {
    animation: custom-pulse 1.5s infinite ease-in-out;
}
</style>
