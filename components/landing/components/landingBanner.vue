<script setup> 
import banner1 from '@/assets/images/banner1.jpg'


</script>

<template>
    <section class=" w-full ">
        <div class=" height-adapter bg-cover bg-center bg-no-repeat bg-fixed" 
            :style="{ backgroundImage:`url(${banner1})`}">
            <div class=" fr-container pt-[80px] md:pt-[125px] lg:pt-[130px] lg:pb-[50px] xl:pt-[150px] xl:pb-[90px] relative z-10 justify-center">
                <div class="flex md:space-x-3 lg:space-x-8 justify-center ">
                    <div class="md:flex md:items-center ">
                        <img src="@/assets/images/logo2.png" alt="logo"  class="md:w-[16rem] md:h-[16rem] xl:w-[27rem] xl:h-[27rem] lg:w-[20rem] lg:h-[20rem] hidden md:block lg:block xl:block " />
                    </div>
                    <span class="bg-white w-1 h-23 hidden md:block lg:block xl:block"></span> 
                    <div class="flex flex-col lg:items-start lg:justify-center md:space-y-2 lg:space-y-2 xl:space-y-4 text-white">
                        <span class="fr-text font-light lg:text-lg xl:text-2xl leading-10">Del 21-25 de Agosto 2023 | Iquitos, Peru </span>
                        <div class="w-[20rem] lg:w-[25rem] xl:w-[30rem]
                        md:text-4xl lg:text-5xl xl:text-6xl  ">
                            <span class="font-bold   fr-text xl:leading-[70px] lg:leading-[50px]">III CONGRESO </span>
                            <span class="fr-text font-bold xl:leading-[70px] lg:leading-[50px]">REGIONAL DE  </span>
                            <span class="fr-text font-bold   font-serif xl:leading-[70px] lg:leading-[50px]">INGENIERÍA DE </span>
                            <span class="fr-text font-bold xl:leading-[70px] lg:leading-[50px]">SISTEMAS</span>
                        </div>
                        <div class="w-[18rem] lg:w-[25rem] xl:w-[28rem] md:text-xl lg:text-2xl xl:text-3xl">
                            <span class=" font-normal  fr-text xl:leading-10">"APLICACIONES DE LA </span>
                            <span class=" font-normal  fr-text  xl:leading-10">INTELIGENCIA ARTIFICIAL</span>
                            <span class=" font-normal fr-text  xl:leading-10"> EN LA AMAZONÍA PERUANA"</span>
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