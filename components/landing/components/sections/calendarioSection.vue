<script setup>
import calendarbg from "@/assets/images/calendar-bg.png";

</script>

<template>
    <section id="calendary" class="w-full bg-white ">
        <div class=" h-full bg-cover bg-center bg-no-repeat bg-fixed" 
            :style="{ backgroundImage:`url(${calendarbg})`}"
        >
            <div class="fr-container py-24">
                <div class="space-y-4">
                    <p class="text-center text-4xl font-bold font-[exo 2] leading-[45px]">
                    Calendario del IV Congreso
                    </p>
                    <div class=" w-full ">
                        <div class=" px-[170px]">
                            <p class="text-center text-gray-500 text-[20px] font-[exo 2]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam aliquam ea
                            sint, aperiam minus unde tempore quaerat blanditiis ipsum .
                            </p>
                        </div>
                    </div>
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
        </div>
    </section>
</template>

<style>
</style>
