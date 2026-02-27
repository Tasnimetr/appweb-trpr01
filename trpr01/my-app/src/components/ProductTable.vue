<script setup lang="ts">
import { products } from '../products'

function editProduct(id: number): void {
    const product = products.value[id]
    console.log('Modifier le produit:', product)
}
</script>
<template>
    <h1>Liste des produits</h1>
    <table>
        <div class="accordion accordion-flush" id="accordionFlushExample">
        <tr v-for="(product, id) in products" :key="product.name">
            <td>
                    <div class="accordion-item">
                        <h2 class="accordion-header" :id="'flush-heading' + id">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                :data-bs-target="'#flush-collapse' + id" aria-expanded="false" :aria-controls="'flush-collapse' + id">
                                {{ product.name }}
                            </button>
                        </h2>
                        <div :id="'flush-collapse' + id" class="accordion-collapse collapse" :aria-labelledby="'flush-heading' + id"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <p>Description: {{ product.description }}</p>
                                <p>Prix: {{ product.price }}$</p>
                                <p>Stock: {{ product.stock }}</p>
                                <button @click="editProduct(id)">Modifier</button>
                            </div>
                        </div>
                    </div>
            
            </td>
        </tr>
        </div>
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

.accordion-item {
    width: 400px;
}

</style>