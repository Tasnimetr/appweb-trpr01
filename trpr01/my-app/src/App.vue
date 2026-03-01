<script setup lang="ts">
import ProductTable from './components/ProductTable.vue'
import ProductForm from './components/ProductForm.vue'
import EditForm from './components/EditForm.vue'
import { editedProduct } from './products';

</script>

<template>
  <div class="container">
    <div class="left">
      <ProductTable />
    </div>

    <div class="right">
       <EditForm v-if="editedProduct"/>
      <ProductForm v-else/>
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
.container {
  display: flex;
  width: 100%;
}
.left, .right {
  width: 50%;
  padding: 100px;
}
/*.right {
  background-color: rgb(244, 230, 239);
}*/
</style>
