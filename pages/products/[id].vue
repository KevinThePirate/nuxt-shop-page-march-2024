<template>
  <div>
    <p>Product Details for {{ id }}</p>
    <p>Product details content</p>
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.id }}</p>
  </div>
</template>
<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;
const { data: product } = await useFetch(uri, { key: id });

definePageMeta({
  layout: "products",
});
</script>
<style scoped></style>
