<script setup lang="ts">
import { reactive } from 'vue'
import { products } from '../products'
import type { Product } from '../products'

interface ProductForm {
    name: string
    price: string
    description: string
    stock: string
}

const form = reactive<ProductForm>({
    name: '',
    price: '',
    description: '',
    stock: ''
})

function createProduct(): Product {
    return {
        name: form.name,
        price: Number(form.price),
        description: form.description,
        stock: Number(form.stock)
    }
}

function submit(): void {
    const product = createProduct()
    products.value.push(product)
    resetForm()
}

function resetForm(): void {
    form.name = ''
    form.price = ''
    form.description = ''
    form.stock = ''
}
</script>

<template>
    <form @submit.prevent="submit">
        <input v-model="form.name" placeholder="Nom" />
        <input v-model="form.price" type="number" placeholder="Prix" />
        <textarea v-model="form.description" placeholder="Description"></textarea>
        <input v-model="form.stock" type="number" placeholder="Stock" />
        <button type="submit">Ajouter</button>
    </form>

    <!--<div v-for="product in products" :key="product.name">
        <h3>Nom: {{ product.name }}</h3>
        <p>Prix: {{ product.price }} $</p>
        <p>Description: {{ product.description }}</p>
        <p>Stock: {{ product.stock }}</p>
    </div>-->
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 300px;
}

input, textarea, button {
    padding: 8px;
    font-size: 14px;
}
</style>