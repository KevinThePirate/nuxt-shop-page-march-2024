<template>
  <div>
    <p>Product Details for {{ id }}</p>
    <p>Product details content</p>
  </div>
</template>
<script setup>
const { id } = useRoute().params;
definePageMeta({
  layout: "products",
});
</script>
<style scoped></style>
