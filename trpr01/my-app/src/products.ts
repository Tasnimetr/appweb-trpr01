import { ref } from 'vue'

export interface Flower {
    id: string
    name: string
    price: number
    description: string
    stock: number
}

export const flowers = ref<Flower[]>([
    { id: '1', name: 'Violette', price: 30.99, description: 'Bouquet de Violettes', stock: 12 },
    { id: '2', name: 'Lys', price: 49.99, description: 'Bouquet de Lys', stock: 0 },
    { id: '3', name: 'Roses', price: 30.41, description: 'Bouquet de roses', stock: 6 },
    { id: '4', name: 'Gerberas', price: 54.99, description: 'Bouquet de gerberas', stock: 3 },
    { id: '5', name: 'Tulipes', price: 52.95, description: 'Bouquet de tulipes', stock: 9 },
])

//copilot inligne suggetions pour ref
export const editedFlower = ref<Flower | null>(null)

export const duplicatedFlower = ref<Flower | null>(null)