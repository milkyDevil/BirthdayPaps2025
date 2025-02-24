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
            <img class="h-48 w-48 object-cover rounded-xl" src="/src/assets/images/tesseract.png"
                alt="Modern building architecture" />
        </div>
    </div>
</template>

<style scoped>
@keyframes continuous-glow {
    0% {
        box-shadow: 0 0 5px 2px rgba(128, 0, 128, 0.5);
    }

    50% {
        box-shadow: 0 0 20px 10px rgba(128, 0, 128, 0.7);
    }

    100% {
        box-shadow: 0 0 5px 2px rgba(128, 0, 128, 0.5);
    }
}

.glow-effect {
    animation: continuous-glow 2s infinite ease-in-out;
}
</style>