<script lang="ts" setup>

defineProps({
    speaker: {
        type: String,
        default: 'Speaker'
    },
    role: {
        type: String,
        default: 'Role'
    },
    companyName: {
        type: String,
        default: 'Company Name'
    },
});



</script>

<template>
    <div >
        <img class="w-[230px] h-[310px]" src="@/assets/images/speaker-2.jpg" alt="ponentes-imagen">
        <div class="text-center font-[exo 2]">
            <p class="text-[21px] text-[#060348]  font-bold">{{ speaker }}</p>
            <p class="text-base font-medium" >{{ role }}</p>
            <p class="text-gray-500 ">{{ companyName }}</p>
        </div>
    </div>
</template>

<style scoped>

.new-row {
  clear: both;
}
</style>
