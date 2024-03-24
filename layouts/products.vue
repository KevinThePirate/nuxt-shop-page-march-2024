<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
        <NuxtLink to="/products" class="font-bold">Site's Products</NuxtLink>
      </nav>
    </header>

    <!-- Main content -->
    <main class="container mx-auto p-4">
      <slot />
    </main>
    <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <ul class="flex gap-4">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products">Product</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products/1">Product 1</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products/2">Product 2</NuxtLink>
        </li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: red;
}
</style>
