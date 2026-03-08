<script setup lang="ts">
import { editedFlower } from '../flowers'

function submit(): void {
    //revenir à ProductForm
    editedFlower.value = null
}
</script>
<template>
    <div v-if="editedFlower">
    <h1>Modifier un bouquet</h1>

    <form @submit.prevent="submit">
        <input v-model="editedFlower.name" required />
        <input v-model="editedFlower.price" type="number" required />
        <textarea v-model="editedFlower.description"  required></textarea>
        <input v-model="editedFlower.stock" type="number" required />
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