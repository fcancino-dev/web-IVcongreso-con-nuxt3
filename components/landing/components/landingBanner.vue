<script setup> 
import banner1 from '@/assets/images/banner1.jpg'


</script>

<template>
    <section class=" w-full ">
        <div class=" height-adapter bg-cover bg-center bg-no-repeat bg-fixed" 
            :style="{ backgroundImage:`url(${banner1})`}">
            <div class="fr-container pt-[150px] pb-[90px] relative z-10">
                <div class="flex space-x-8 justify-center ">
                    <img src="@/assets/images/favicon.ico" alt="logo" class="w-72" />
                    <span class="bg-white w-1 h-23"></span> 
                    <div class="flex flex-col items-start justify-center space-y-6 text-white">
                        <span class="text-epg font-medium text-2xl font-[exo 2] leading-10">Del 21-25 de Agosto 2023 | Iquitos, Peru </span>
                        <div>
                            <span class="text-epg font-bold text-6xl font-[exo 2] leading-20">IV CONGRESO </span>
                            <p class="text-epg font-bold text-6xl font-[exo 2] leading-20">REGIONAL DE  </p>
                            <span class="text-epg font-bold text-6xl font-[exo 2] leading-20">INGENIERÍA DE </span>
                            <p class="text-epg font-bold text-6xl font-[exo 2] leading-20">SISTEMAS</p>
                        </div>
                        <div>
                            <span class=" font-medium text-3xl font-[exo 2] leading-10">"APLICACIONES DE LA INTELIGENCIA</span>
                            <p class=" font-medium text-3xl font-[exo 2] leading-10">ARTIFICIAL EN LA AMAZONÍA PERUANA"</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute inset-0 bg-[#404b6c] opacity-[0.75] h-[640px]"></div>
        </div>
    </section>
</template>

<style scoped>

.height-adapter{
    height: calc(95vh - 20px)
    
}

</style>