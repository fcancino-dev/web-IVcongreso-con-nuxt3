<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    text1: {
        type: String,
        default: 'text1'
    },
    text2: {
        type: String,
        default: 'text2'
    },
    text3: {
        type: String,
        default: 'text3'
    },
})


</script>

<template>
    <div>
        <img src="@/assets/images/favicon.ico" alt="logo" class="w-[60px]" />
        <p class="font-extrabold text-[16.5px] " >{{ text1 }}</p>
        <div class="text-gray-600 font-[roboto] font-medium text-[17px]">
            <p>[ {{ text2 }} ]</p>
            <p>[ {{ text3 }} ]</p>
        </div>
    </div>
</template>