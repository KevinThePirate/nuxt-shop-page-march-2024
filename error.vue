<template>
  <div
    class="mt-7 max-w-sm mx-auto text-center bg-white shadow-md rounded-lg p-6"
  >
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7">{{ error.message }}</p>
    <button class="btn mt-7" @click="handleError">Go Back</button>
  </div>
</template>
<script setup>
defineProps(["error"]);

const handleError = () => {
  clearError({ redirect: "/" });
};
</script>
<style scoped></style>
