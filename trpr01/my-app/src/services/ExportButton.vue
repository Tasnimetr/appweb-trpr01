<script setup lang="ts">
import { flowers } from '../products'

//source: https://coreui.io/answers/how-to-export-data-to-csv-in-vue/
function exportFlowersListCSV(): void {

    const headers = ["id", "nom", "prix", "description", "stock"].join(',')

    const rows = flowers.value.map(row =>
        Object.values(row).join(',')
    ).join('\n')

    const csv = `${headers}\n${rows}`

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })

    const url = window.URL.createObjectURL(blob)

    const lien = document.createElement('a')
    lien.href = url
    lien.download = "flowers.csv"
    lien.click()

    window.URL.revokeObjectURL(url)
}
</script>
<template>

    <button @click="exportFlowersListCSV">
        Exporter
    </button>
</template>