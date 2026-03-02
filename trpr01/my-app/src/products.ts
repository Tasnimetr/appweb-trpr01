import { ref } from 'vue'

export interface Product {
    id: string
    name: string
    price: number
    description: string
    stock: number
}

export const products = ref<Product[]>([
    { id: '1', name: 'Lys', price: 49.99, description: 'Bouquet de Lys', stock: 12 },
    { id: '2', name: 'Roses', price: 30.41, description: 'Bouquet de roses', stock: 6 },
    { id: '3', name: 'Gerberas', price: 54.99, description: 'Bouquet de gerberas', stock: 9 },
    { id: '4', name: 'Tulipes', price: 52.95, description: 'Bouquet de tulipes', stock: 18 },
])

//copilot inligne suggetions pour ref
export const editedProduct = ref<Product | null>(null)