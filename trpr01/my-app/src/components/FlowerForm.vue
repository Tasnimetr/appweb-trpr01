<script setup lang="ts">
import { reactive } from 'vue'
import { flowers } from '../products'
import type { Flower  } from '../products'

interface FlowerForm {
    name: string
    price: string
    description: string
    stock: string
}

const form = reactive<FlowerForm>({
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

function createFlower(): Flower {
    return {
        //source: AppWebGPT (prompt->comment générer un id unique en TypeScript)
        id: crypto.randomUUID(),
        name: form.name,
        price: Number(form.price),
        description: form.description,
        stock: Number(form.stock)
    }
}

function submit(): void {
    if (form.name.trim().length < 3) {
        errors.name = 'Le nom de la fleur doit être de minimum 3 caractères.'
        return
    } else {
        errors.name = ''
    }
    if (Number(form.price) < 0) {
        errors.price = 'Le prix de la fleur doit être un nombre valide'
        return
    } else {
        errors.price = ''
    }
    if (Number(form.stock) < 0) {
        errors.stock = 'Le stock de la fleur doit être un nombre entier'
        return
    } else {
        errors.stock = ''
    }
    errors.name = ''
    const flower = createFlower()
    flowers.value.push(flower)
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

    <h1>Ajouter une fleur</h1>

    <form @submit.prevent="submit">
        <input v-model="form.name" placeholder="Nom" required />
        <p v-if="errors.name" class="text-danger">{{ errors.name }}</p>
        <input v-model="form.price" type="number" placeholder="Prix" required />
        <p v-if="errors.price" class="text-danger">{{ errors.price }}</p>
        <textarea v-model="form.description" placeholder="Description" required></textarea>
        <input v-model="form.stock" type="number" placeholder="Stock" required />
        <p v-if="errors.stock" class="text-danger">{{ errors.stock }}</p>
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