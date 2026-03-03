<script setup lang="ts">
import ProductTable from './components/ProductTable.vue'
import ProductForm from './components/ProductForm.vue'
import EditForm from './components/EditForm.vue'
import DuplicateForm from './components/DuplicateForm.vue';
import { editedProduct, duplicatedProduct } from './products';

</script>

<template>
  <div class="container1">
    <img src="./assets/logo.jpg" alt="logo" />
    <h1>Fleuriste Ste-foy</h1>
  </div>

  <div class="container2">
    <div class="left">
      <ProductTable />
    </div>

    <div class="right">
      <EditForm v-if="editedProduct" />
      <DuplicateForm v-else-if="duplicatedProduct" />
      <ProductForm v-else />
    </div>
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

div {
  margin-bottom: 50px;
}

.container1 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;
}

.container1>img {
  height: 50px;
  width: auto;
}

.container2 {
  display: flex;
  width: 100%;
}

.left,
.right {
  width: 50%;
  padding: 100px;
}

/*.right {
  background-color: rgb(244, 230, 239);
}*/
</style>
