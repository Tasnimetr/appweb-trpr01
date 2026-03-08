<script setup lang="ts">
import { flowers } from '../products'
import { duplicatedFlower} from '../products'

function submit(): void {
    //revenir à ProductForm
    if (!duplicatedFlower.value) {
        return;
    }

    const flowerCopy = {
        id: (flowers.value.length + 1).toString(),
        name: duplicatedFlower.value.name,
        price: Number(duplicatedFlower.value.price),
        description: duplicatedFlower.value.description,
        stock: Number(duplicatedFlower.value.stock)
    }

    flowers.value.push(flowerCopy)
    duplicatedFlower.value = null
}
</script>
<template>
    <div v-if="duplicatedFlower">
    <h1>Dupliquer un bouquet</h1>

    <form @submit.prevent="submit">
        <input v-model="duplicatedFlower.name" disabled />
        <input v-model="duplicatedFlower.price" type="number" disabled />
        <textarea v-model="duplicatedFlower.description"  disabled></textarea>
        <input v-model="duplicatedFlower.stock" type="number" disabled />
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