<script setup lang="ts">
import { flowers } from '../products'

function filteredList() {
    return flowers.value.filter((flower) =>
        flower.stock <= 3
    )
}
</script>
<template>
    <div class="stockPreview">
    <h2 class="text-danger">Stock critique</h2>
    <div v-for="flower in filteredList()" :key="flower.id">
        <p v-if="flower.stock === 0" class="text-danger">{{ flower.name }} en rupture de stock.</p>
        <p v-else class="text-danger">Il ne reste que {{ flower.stock }} {{ flower.name }}.</p>
    </div>
    </div>
</template>

<style scoped>
.stockPreview {
    width: 300px;
    margin-top: 25px;
    margin-left: 25px;
}
</style>