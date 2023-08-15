<script  setup>
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
        <button class="bg-[#ff3d00] hover:bg-blue-700 text-white px-4 py-2 md:py-2 lg:py-4 md:px-4 lg:px-8 rounded-[6px]" @click="onClick">
            <span class=" fr-text text-sm md:text-sm lg:text-[0.9rem] xl:text-base font-medium leading-6"> {{ text }}</span>
        </button>
    </div>       
</template>