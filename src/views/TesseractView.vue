<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const handleClick = () => {
    router.push('/deadpool')
};
</script>

<template>
    <div
        class="flex justify-center items-center mx-auto max-w-md min-h-screen rounded-xl bg-white dark:bg-gray-900 md:max-w-2xl">
        <div class="relative overflow-hidden rounded-xl shadow-md cursor-pointer glow-effect" @click="handleClick">
            <img class="h-48 w-48 object-cover rounded-xl" src="/images/tesseract.png"
                alt="Modern building architecture" />
        </div>
    </div>

</template>

<style scoped>
@keyframes alternating-glow {
    0% {
        box-shadow: 0 0 5px 2px rgba(168, 85, 247, 0.5);
        /* Purple */
    }

    25% {
        box-shadow: 0 0 20px 10px rgba(168, 85, 247, 0.7);
    }

    50% {
        box-shadow: 0 0 5px 2px rgba(20, 184, 166, 0.5);
        /* Teal */
    }

    75% {
        box-shadow: 0 0 20px 10px rgba(20, 184, 166, 0.7);
    }

    100% {
        box-shadow: 0 0 5px 2px rgba(168, 85, 247, 0.5);
        /* Back to Purple */
    }
}

.glow-effect {
    animation: alternating-glow 3s infinite ease-in-out;
}
</style>