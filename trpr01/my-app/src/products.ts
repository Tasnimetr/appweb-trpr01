import { ref } from 'vue'

export interface Product {
    name: string
    price: number
    description: string
    stock: number
}

export const products = ref<Product[]>([])