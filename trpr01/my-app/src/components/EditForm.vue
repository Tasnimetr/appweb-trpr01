<script setup lang="ts">
import { editedProduct } from '../products'

function submit(): void {
    //revenir à ProductForm
    editedProduct.value = null
}
</script>
<template>
    <div v-if="editedProduct">
    <h1>Modifier un bouquet</h1>

    <form @submit.prevent="submit">
        <input v-model="editedProduct.name" required />
        <input v-model="editedProduct.price" type="number" required />
        <textarea v-model="editedProduct.description"  required></textarea>
        <input v-model="editedProduct.stock" type="number" required />
        <button type="submit">Modifier</button>
    </form>
    </div>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 300px;
    margin-left: 25px;
}

h1 {
    width: 350px;
    align-content: center;
}

input,
textarea,
button {
    padding: 8px;
    font-size: 14px;
}
</style>