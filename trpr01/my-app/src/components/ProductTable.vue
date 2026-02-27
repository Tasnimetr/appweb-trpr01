<script setup lang="ts">
    import { products } from '../products'

    function editProduct(id: number): void {
        const product = products.value[id]
        console.log('Modifier le produit:', product)
    }
</script>
<template>
    <h1>Produits</h1>
    <table>
        <tr>
            <th>Nom</th>
            <th>Options</th>
        </tr>
        <tr v-for="(product, id) in products" :key="product.name">
            <td><a href="#">{{ product.name }}</a></td>
            <td><button @click="editProduct(id)">Modifier</button></td>
        </tr>
    </table>


</template> 


<style scoped>
table {
  margin: 0 auto;
  border-collapse: collapse;
}

th, td {
  padding: 10px 50px;
  /*border: 1px solid #ccc;*/
}
</style>