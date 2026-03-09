<script setup lang="ts">
const input = defineModel()
</script>

<template>
    <input class="searchBar" type="text" v-model="input" placeholder="Rechercher une fleur..." />
</template>

<style>
.searchBar {
    width: 175px;
}
</style>