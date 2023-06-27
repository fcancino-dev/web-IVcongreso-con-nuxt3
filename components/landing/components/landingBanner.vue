<script setup> 
import banner1 from '@/assets/images/banner1.jpg'


</script>

<template>
    <section class=" w-full ">
        <div class=" height-adapter bg-cover bg-center bg-no-repeat bg-fixed" 
            :style="{ backgroundImage:`url(${banner1})`}">
            <div class=" fr-container pt-[150px] pb-[90px] relative z-10">
                <div class="flex space-x-8 justify-center ">
                    <img src="@/assets/images/logo2.png" alt="logo" class="w-[29rem] h-[29rem]" />
                    <span class="bg-white w-1 h-23"></span> 
                    <div class="flex flex-col items-start justify-center space-y-6 text-white">
                        <span class="fr-text font-light text-2xl leading-10">Del 21-25 de Agosto 2023 | Iquitos, Peru </span>
                        <div>
                            <span class="font-bold text-6xl fr-text leading-[70px]">III CONGRESO </span>
                            <p class="fr-text font-bold text-6xl  leading-[70px]">REGIONAL DE  </p>
                            <span class="fr-text font-bold text-6xl font-serif leading-[70px]">INGENIERÍA DE </span>
                            <p class="fr-text font-bold text-6xl leading-[70px]">SISTEMAS</p>
                        </div>
                        <div>
                            <span class=" font-normal text-3xl fr-text leading-10">"APLICACIONES DE LA </span>
                            <p class=" font-normal text-3xl fr-text  leading-10">INTELIGENCIA ARTIFICIAL</p>
                            <p class=" font-normal text-3xl fr-text  leading-10"> EN LA AMAZONÍA PERUANA"</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute h-full inset-0 bg-[#060348] opacity-[0.75] "></div>
        </div>
    </section>
</template>

<style scoped>

.height-adapter{
    height: 100vh;
    
}

</style>