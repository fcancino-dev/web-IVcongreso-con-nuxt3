<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    text: {
        type: String,
        default: 'text'
    },
    onClick: {
        type: Function,
        required: true,
    }

})



</script>

<template>
    <div>
        <button class="bg-[#ff3d00] hover:bg-blue-700 text-white py-4 px-8 rounded-[6px]" @click="onClick">
            <span class=" fr-text text-base font-medium leading-6"> {{ text }}</span>
        </button>
    </div>       
</template>