<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>
<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;
const { data: product } = await useFetch(uri, { key: id });

if (!product.value) {
  const error = {
    statusCode: 404,
    message: "Product not found",
    fatal: true,
  };
  throw createError(error);
}

definePageMeta({
  layout: "products",
});
</script>
<style scoped></style>
