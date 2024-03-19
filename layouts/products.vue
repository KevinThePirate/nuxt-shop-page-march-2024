<template>
  <div>
    <header>
      <h1>Products</h1>
      <NuxtLink to="/products">Site's Products</NuxtLink>
    </header>

    <!-- Main content -->
    <main>
      <slot />
    </main>
    <footer>
      <ul>
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
