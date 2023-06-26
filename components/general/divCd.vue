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
    // icon: {
    //     type: String,
    //     default: 'user'
    // },
    name: {
        type: String,
        default: 'akar-icons:alarm'
    }
})

</script>

<template>
    <div class=" space-y-5">
        <div>
            <!-- <font-awesome-icon :icon="['fas', icon]" :style="{ color: 'blue' }" class="fa-4x"/> -->
            <div>
                <Icon :name="name" size="90" color="#404b6c"/>
                <!-- <img src="@/assets/images/alarm.svg" class=" w-8" alt="logo"> -->
            </div>
        </div>
        <div>
            <p class="font-extrabold text-[16.5px] " >{{ text1 }}</p>
            <div class="text-gray-600 font-[roboto] font-medium text-[17px]">
                <p>[ {{ text2 }} ]</p>
                <p>[ {{ text3 }} ]</p>
            </div>
        </div>
    </div>
</template>