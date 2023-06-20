<script setup>

const currentYear = new Date().getFullYear()

</script>

<template>
    <section class=" w-full bg-black ">
        <div class="fr-container flex justify-center text-white">
            &copy; Franco Cancino - {{ currentYear }}
        </div>
    </section>
</template>