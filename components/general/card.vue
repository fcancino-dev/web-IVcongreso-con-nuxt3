<script setup>
import { defineProps } from 'vue';

const props = defineProps({
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
    // isNewRow: Boolean
});

// const cardClasses = `general-card ${props.isNewRow ? 'new-row' : ''}`;

</script>

<template>
    <div :class="cardClasses">
        <img class="w-[230px] h-[310px]" src="@/assets/images/speaker-2.jpg" alt="ponentes-imagen">
        <div class="text-center font-[exo 2]">
            <p class="text-[21px] text-blue-500  font-bold">{{ speaker }}</p>
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
