<script setup>
import banner2 from "@/assets/images/banner2.jpg";

</script>

<template>
    <section class=" w-full bg-[#060348] relative">
        <div class=" h-full bg-cover bg-center bg-no-repeat bg-fixed" 
            :style="{ backgroundImage:`url(${banner2})`}"
        >
            <div class="fr-container py-24 px-4 md:px-0 relative z-10">
                <div class=" flex space-x-6 ">
                    <p class="fr-text text-center text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold lg:leading-[45px] xl:leading-[45px] text-white">"Descubre el IV Congreso Regional: Explorando las Aplicaciones de la Inteligencia Artificial en la Amazonía Peruana" </p>
                    <!-- <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae enim sunt asperiores quaerat 
                        perspiciatis, distinctio eos facilis ad, aliquam exercitationem iste in laboriosam. Debitis 
                        consectetur sit temporibus et quae eligendi.
                    </p> -->
                    <!-- <font-awesome-icon icon="fa-brands fa-github-square" size="10x" rotation="" flip="" inverse fixed-width/>                 -->
                </div>
            </div>
            <div class="absolute h-full inset-0 bg-[#060348] opacity-[0.75] "></div>
        </div>
    </section>
</template>
