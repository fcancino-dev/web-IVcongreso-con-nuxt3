<script lang="ts" setup>
import users from '@/assets/icons/users.svg'

defineProps({
    title: {
        type: String,
        default: 'Titulo'
    },
    subtitle: {
        type: String,
        default: 'Subtitulo'
    },
    name: {
        type: String,
        default: users
    }
});



</script>

<template>
    <div class=" bg-white w-[21.8rem] border-solid border rounded-md">
        <div class=" py-12 px-9 space-y-6">
            <div class=" flex justify-center">
                <!-- <img src="@/assets/icons/users.svg" class=" w-[70px] " alt="users"> -->
                <img :src="name" class=" w-[70px] h-[70px]" alt="users" >
            </div>
            <div class=" space-y-2 text-center">
                <p class="fr-text font-bold text-[1.28rem] ">{{ title }}</p>
                <div class="fr-p text-gray-500 font-normal text-[1.05rem]">
                    <p>{{ subtitle }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
