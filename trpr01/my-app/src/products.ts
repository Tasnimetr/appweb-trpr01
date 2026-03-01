import { ref } from 'vue'

export interface Product {
    id: string
    name: string
    price: number
    description: string
    stock: number
}

export const products = ref<Product[]>([
    { id: '1', name: 'Chaussures', price: 75, description: 'Chaussures de sport', stock: 25 },
    { id: '2', name: 'Robes', price: 120, description: 'Robes de soirée', stock: 6 },
    { id: '3', name: 'Sac', price: 250, description: 'Sac à main', stock: 13 },
    { id: '4', name: 'Casquette', price: 15, description: 'Casquette Adidas', stock: 37 },
])

//intellisense pour ref
export const editedProduct = ref<Product | null>(null)