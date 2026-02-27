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
            <td>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                {{ product.name }}
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <p>{{ product.description }}</p>
                                <p>Prix: {{ product.price }}$</p>
                                <p>Stock: {{ product.stock }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <td><button @click="editProduct(id)">Modifier</button></td>
        </tr>
    </table>

</template>


<style scoped>
table {
    margin: 0 auto;
    border-collapse: collapse;
    background-color: rgb(208, 236, 250);
}

th,
td {
    padding: 10px 50px;
    /*border: 1px solid #ccc;*/
}
</style>