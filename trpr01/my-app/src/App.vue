<script setup lang="ts">
import ProductTable from './components/ProductTable.vue'
import ProductForm from './components/ProductForm.vue'
</script>

<template>
  <div class="container">
  <ProductTable />
    <hr />
  <ProductForm />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
