<script setup lang="ts">
import { ref } from "vue";
import type { Flower } from '../products'
import { flowers, editedFlower, duplicatedFlower } from '../products'

const displayDeletionConfirmation = ref(false);
let input = ref("");

function editFlower(flower: Flower): void {
    if (duplicatedFlower.value) {
        duplicatedFlower.value = null;
    }
    editedFlower.value = flower
    console.log('Fleur à modifier->', flower)
}

function duplicateFlower(flower: Flower): void {
    if (editedFlower.value) {
        editedFlower.value = null;
    }
    duplicatedFlower.value = flower
    console.log('Fleur à dupliquer->', flower);
}

function deleteFlower(flower: Flower): void {
    flowers.value.splice(flowers.value.indexOf(flower), 1);
    console.log('Fleur à supprimer->', flower);
    displayDeletionConfirmation.value = true;
}


//source pour la barre de recherche: https://blog.logrocket.com/create-search-bar-vue/
function filteredList() {
    return flowers.value.filter((flower) =>
        flower.name.toLowerCase().includes(input.value.toLowerCase())
    );
}
</script>

<template>
    <h1>Liste des fleurs</h1>
    <table>
        <div>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <input type="text" v-model="input" placeholder="Rechercher une fleur..." />
                <div class="item product" v-for="(flower, id) in filteredList()" :key="flower.name">
                    <td>
                        <!--source exemple accordéon: https://getbootstrap.com/docs/5.0/components/accordion/-->
                        <div class="accordion-item">
                            <h2 class="accordion-header" :id="'flush-heading' + id">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    :data-bs-target="'#flush-collapse' + id" aria-expanded="false"
                                    :aria-controls="'flush-collapse' + id">
                                    {{ flower.name }}
                                </button>
                            </h2>
                            <div :id="'flush-collapse' + id" class="accordion-collapse collapse"
                                :aria-labelledby="'flush-heading' + id" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <p>Description: {{ flower.description }}</p>
                                    <p>Prix: {{ flower.price }}$</p>
                                    <div v-if="flower.stock <= 3" class="text-danger">
                                        <p>Stock: {{ flower.stock }}</p>
                                        <p v-if="flower.stock === 0">En rupture de stock!</p>
                                        <p v-else>Stock critique</p>
                                    </div>
                                    <p v-else class="text-success">Stock: {{ flower.stock }}</p>
                                    <button @click="editFlower(flower)">Modifier</button>
                                    <button @click="duplicateFlower(flower)">Dupliquer</button>
                                    <button @click="deleteFlower(flower)">Supprimer</button>
                                </div>
                            </div>
                        </div>
                    </td>
                </div>
                <div class="item error" v-if="input && !filteredList().length">
                    <p class="text-danger">Aucun résultat correspondant!</p>
                </div>
            </div>
        </div>
    </table>
    <dialog class="alert alert-success" v-if="displayDeletionConfirmation" open>
        <!--source: https://www.w3schools.com/tags/tag_dialog.asp-->
        Supression Réussie
        <form method="dialog">
            <button @click="displayDeletionConfirmation = false">X</button>
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