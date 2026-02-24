<script setup lang="ts">
    import { products } from '../products'
</script>
<template>
    <h1>Produits</h1>
    <table>
        <tr>
            <th>Nom</th>
            <th>Détails</th>
            <th>Options</th>
        </tr>
        <tr v-for="product in products" :key="product.name">
            <td>{{ product.name }}</td>
            <td><a href="#">Voir détails</a></td>
            <td>Boutons</td>
        </tr>
    </table>
</template>