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
        <button class="bg-[#060348] hover:bg-blue-700 text-white py-2 px-4 rounded-[6px]" @click="onClick">
            <span class=" font-[exo 2] text-base font-medium leading-6"> {{ text }}</span>
        </button>
    </div>       
</template>