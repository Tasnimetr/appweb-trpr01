import { ref } from 'vue'

export interface Product {
    id: string
    name: string
    price: number
    description: string
    stock: number
}

export const products = ref<Product[]>([])

//intellisense pour ref
export const editedProduct = ref<Product | null>(null)