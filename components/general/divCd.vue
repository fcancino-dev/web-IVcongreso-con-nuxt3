<script lang="ts" setup>
// import { defineProps } from 'vue'
import alarm from '@/assets/images/alarm.svg'
// import location from '@/assets/images/location.svg'

// interface IData {
//     text1: string
//     text2: string
//     text3: string
//     // icon: string
//     url: string
// }

// const props: IData = {
//     text1: 'text1',
//     text2: 'text2',
//     text3: 'text3',
//     // icon: 'user',
//     url: alarm
// }

defineProps({
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
        default: alarm
    }
})

</script>

<template>
    <div class=" space-y-5">
        <div>
            <!-- <font-awesome-icon :icon="['fas', icon]" :style="{ color: 'blue' }" class="fa-4x"/> -->
            <div>
                <!-- <Icon :name="name" size="90" color="#060348"/> -->
                <img :src="name" class=" w-[70px]" alt="logo">
            </div>
        </div>
        <div>
            <p class="fr-text font-black text-[16.5px] " >{{ text1 }}</p>
            <div class="fr-p text-gray-600 font-[roboto] font-medium text-[17px]">
                <p>[ {{ text2 }} ]</p>
                <p>[ {{ text3 }} ]</p>
            </div>
        </div>
    </div>
</template>
