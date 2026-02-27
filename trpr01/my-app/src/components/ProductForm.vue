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

const errors = reactive({
    name: '',
    price: '',
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

    if (form.name.length < 3) {
        errors.name = 'Le nom du produit doit être de minimum 3 caractères.'
        return
    }
    if (form.price.length >= 0) {
        errors.price = 'Le prix du produit doit être un nombre valide'
        return
    }
    if (form.stock.length >= 0) {
        errors.stock = 'Le stock du produit doit être un nombre entier'
        return
    }
    errors.name = ''
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

    <h1>Ajouter un produit</h1>

    <form @submit.prevent="submit">
        <input v-model="form.name" placeholder="Nom" required />
        <p v-if="errors.name" class="text-danger">{{ errors.name }}</p>
        <input v-model="form.price" type="number" placeholder="Prix" required />
        <textarea v-model="form.description" placeholder="Description" required></textarea>
        <input v-model="form.stock" type="number" placeholder="Stock" required />
        <button type="submit">Ajouter</button>
    </form>
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