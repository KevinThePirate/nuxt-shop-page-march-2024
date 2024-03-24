<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Site Logo</NuxtLink>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="btn">Product</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Main content -->
    <main class="container mx-auto p-4">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: red;
}
</style>
