<template>
  <div class="bg-white shadow-md rounded-lg p-6">
    <img :src="product.image" alt="product" class="w-full h-48 object-cover" />
    <h2 class="text-lg font-semibold truncate">{{ product.title }}</h2>
    <p class="text-gray-500">€{{ product.price }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>
<script setup>
const { product } = defineProps(["product"]);
</script>
<style scoped></style>
