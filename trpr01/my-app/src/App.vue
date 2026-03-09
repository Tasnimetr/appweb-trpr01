<script setup lang="ts">
import ProductTable from './components/FlowerTable.vue'
import ProductForm from './components/FlowerForm.vue'
import EditForm from './components/EditForm.vue'
import DuplicateForm from './components/DuplicateForm.vue';
import ExportButton from './services/ExportButton.vue';
import StockPreview from './components/StockPreview.vue';
import { editedFlower, duplicatedFlower } from './products';

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
      <EditForm v-if="editedFlower" />
      <DuplicateForm v-else-if="duplicatedFlower" />
      <ProductForm v-else />
      <StockPreview/>
    </div>
  </div>
  <ExportButton />
</template>

<style scoped>
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
  gap: 40px;
}

.left,
.right {
  width: 50%;
  padding: 40px;
}

/*.right {
  background-color: rgb(244, 230, 239);
}*/
</style>
