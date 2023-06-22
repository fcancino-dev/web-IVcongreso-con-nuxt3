<script setup>

</script>

<template>
    <section id="calendary" class="w-full bg-gray-200 py-24">
        <div class="fr-container">
            <div class="space-y-4">
                <p class="text-center text-4xl font-bold font-[exo 2] leading-[45px]">
                Calendario del IV Congreso
                </p>
                <p class="text-center text-gray-500 text-[20px] font-[exo 2]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam aliquam ea
                sint, aperiam minus unde tempore quaerat blanditiis ipsum ipsa magnam temporibus
                perspiciatis provident ullam! Consequatur enim aspernatur quia.
                </p>
            </div>
            <CalendarioComp>
                <template #tabContent1>
                    <!-- Contenido para dia lunes -->
                    <ContentCalendarioDayLunes />
                </template>
                <template #tabContent2>
                    <!-- Contenido para dia martes -->
                    <ContentCalendarioDayMartes />
                </template>
                <template #tabContent3>
                    <!-- Contenido para dia miercoles -->
                    <ContentCalendarioDayMiercoles />
                </template>
                <template #tabContent4>
                    <!-- Contenido para dia jueves -->
                    <ContentCalendarioDayJueves />
                </template>
                <template #tabContent5>
                    <!-- Contenido para dia viernes -->
                    <ContentCalendarioDayViernes />
                </template>
            </CalendarioComp>
        </div>
    </section>
</template>

<style>
</style>
