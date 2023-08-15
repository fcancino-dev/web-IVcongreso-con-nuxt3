<script setup lang="ts">
defineProps({
    height: {
        type: String,
        default: "648px",
    },
    bgColor: {
        type: String,
        default: "#E9E8ED",
    },
});
</script>

<template>
    <section 
        class="fr-wrapper py-24 px-5" 
        :style="{
        height: height,
        backgroundColor: `${bgColor}`,
    }">
        <div class="fr-container">
            <div 
                class="w-full h-full flex flex-col md:flex-row justify-center items-center"
            >
                <slot></slot>
            </div>
        </div>
    </section>
</template>