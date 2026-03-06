<script setup lang="ts">
import { products } from '../products'
import { duplicatedProduct } from '../products'

function submit(): void {
    //revenir à ProductForm
    if (!duplicatedProduct.value) {
        return;
    }

    const productCopy = {
        id: (products.value.length + 1).toString(),
        name: duplicatedProduct.value.name,
        price: Number(duplicatedProduct.value.price),
        description: duplicatedProduct.value.description,
        stock: Number(duplicatedProduct.value.stock)
    }

    products.value.push(productCopy)
    duplicatedProduct.value = null
}
</script>
<template>
    <div v-if="duplicatedProduct">
    <h1>Dupliquer un bouquet</h1>

    <form @submit.prevent="submit">
        <input v-model="duplicatedProduct.name" disabled />
        <input v-model="duplicatedProduct.price" type="number" disabled />
        <textarea v-model="duplicatedProduct.description"  disabled></textarea>
        <input v-model="duplicatedProduct.stock" type="number" disabled />
        <button type="submit">Dupliquer</button>
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