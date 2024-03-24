<template>
  <div>
    <h2>About Page</h2>
    <p>About page content</p>
    <p>{{ data }}</p>
  </div>
</template>
<script setup>
const { data } = await useFetch("/api/currency/GBP");
console.log(data);
</script>
<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
