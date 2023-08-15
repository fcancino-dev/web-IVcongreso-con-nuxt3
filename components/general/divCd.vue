<script lang="ts" setup>
import alarm from '@/assets/icons/alarm.svg'

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
    <div class=" space-y-2 md:space-y-3 lg:space-y-5 ">
        <div>
            <!-- <font-awesome-icon :icon="['fas', icon]" :style="{ color: 'blue' }" class="fa-4x"/> -->
            <div>
                <!-- <Icon :name="name" size="90" color="#060348"/> -->
                <img :src="name" class="w-[50px] md:w-[60px] lg:w-[65px] xl:w-[70px]" alt="logo" >
            </div>
        </div>
        <div class="md:space-y-1">
            <p class="fr-text font-black text-sm lg:text-[1rem] xl:text-[1.03rem] " >{{ text1 }}</p>
            <div class="md:space-y-1 fr-p text-gray-600 font-medium text-sm md:text-[0.9rem] lg:text-[0.95rem] xl:text-[1.07rem]">
                <p>[ {{ text2 }} ]</p>
                <p>[ {{ text3 }} ]</p>
            </div>
        </div>
    </div>
</template>
