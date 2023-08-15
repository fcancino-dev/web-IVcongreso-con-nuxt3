<script setup>
import calendarbg from "@/assets/images/calendar-bg.png";

</script>

<template>
    <section id="calendary" class="w-full bg-white ">
        <div class=" h-full bg-cover bg-center bg-no-repeat bg-fixed" 
            :style="{ backgroundImage:`url(${calendarbg})`}"
        >
            <div class="fr-container py-24 px-4">
                <div class="space-y-4">
                    <p class="fr-text text-center text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-black lg:leading-[45px]">
                    Calendario del III Congreso
                    </p>
                    <div class=" w-full ">
                        <div class=" lg:px-[140px] xl:px-[170px]">
                            <p class="fr-p text-center text-gray-500 text-base md:text-lg lg:text-[1.13rem] xl:text-[1.25rem]">
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
