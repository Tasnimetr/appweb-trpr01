<script setup lang="ts">
import { ref } from "vue";
import type { Product } from '../products'
import { products, editedProduct, duplicatedProduct } from '../products'

const displayMessage = ref(false);
let input = ref("");

function editProduct(product: Product): void {
    if (duplicatedProduct.value) {
        duplicatedProduct.value = null;
    }
    editedProduct.value = product
    console.log('Produit à modifier->', product)
}

function duplicateProduct(product: Product): void {
    if (editedProduct.value) {
        editedProduct.value = null;
    }
    duplicatedProduct.value = product
    console.log('Produit à dupliquer->', product);
}

function deleteProduct(product: Product): void {
    products.value.splice(products.value.indexOf(product), 1);
    console.log('Produit à supprimer->', product);
    displayMessage.value = true;
}


//source: https://blog.logrocket.com/create-search-bar-vue/
function filteredList() {
    return products.value.filter((product) =>
        product.name.toLowerCase().includes(input.value.toLowerCase())
    );
}


</script>

<template>
    <h1>Liste des fleurs</h1>
    <table>
        <div>
        <div class="accordion accordion-flush" id="accordionFlushExample">
        <input type="text" v-model="input" placeholder="Rechercher une fleur..." />
        <div class="item product" v-for="(product, id) in filteredList()" :key="product.name">
            <td>
                    <!--source exemple accordéon: https://getbootstrap.com/docs/5.0/components/accordion/-->
                    <div class="accordion-item">
                        <h2 class="accordion-header" :id="'flush-heading' + id">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                :data-bs-target="'#flush-collapse' + id" aria-expanded="false"
                                :aria-controls="'flush-collapse' + id">
                                {{ product.name }}
                            </button>
                        </h2>
                        <div :id="'flush-collapse' + id" class="accordion-collapse collapse"
                            :aria-labelledby="'flush-heading' + id" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <p>Description: {{ product.description }}</p>
                                <p>Prix: {{ product.price }}$</p>
                                <p>Stock: {{ product.stock }}</p>
                                <button @click="editProduct(product)">Modifier</button>
                                <button @click="duplicateProduct(product)">Dupliquer</button>
                                <button @click="deleteProduct(product)">Supprimer</button>
                            </div>
                        </div>
                    </div>
                </td>
        </div>
         <div class="item error" v-if="input && !filteredList().length">
            <p>Aucun résultat trouvé!</p>
        </div>
        </div>
    </div>
    </table>
    <dialog class="alert alert-success" v-if="displayMessage" open>
        <!--source: https://www.w3schools.com/tags/tag_dialog.asp-->
        Supression Réussie
        <form method="dialog">
            <button @click="displayMessage = false">X</button>
            <!--source: AppWebGpt pour comrpendre comment fermer dialogue(comment fermer un dialogue avec un bouton)-->
        </form>
    </dialog>

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
}

.accordion-item,
dialog {
    width: 400px;
}

dialog {
    margin-top: 10px;
    margin-left: 50px;
}

button {
    margin-right: 5px;
}
</style>