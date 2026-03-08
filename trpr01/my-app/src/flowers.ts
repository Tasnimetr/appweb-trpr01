import { ref } from 'vue'

export interface Flower {
    id: string
    name: string
    price: number
    description: string
    stock: number
}

export const flowers = ref<Flower[]>([
    { id: '1', name: 'Lys', price: 49.99, description: 'Bouquet de Lys', stock: 12 },
    { id: '2', name: 'Roses', price: 30.41, description: 'Bouquet de roses', stock: 6 },
    { id: '3', name: 'Gerberas', price: 54.99, description: 'Bouquet de gerberas', stock: 3 },
    { id: '4', name: 'Tulipes', price: 52.95, description: 'Bouquet de tulipes', stock: 9 },
])

//copilot inligne suggetions pour ref
export const editedFlower = ref<Flower | null>(null)

export const duplicatedFlower = ref<Flower | null>(null)