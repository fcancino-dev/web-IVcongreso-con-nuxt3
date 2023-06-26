<script setup>
import bg3 from "@/assets/images/bg3.jpg";

</script>
<template>
    <section class=" w-full bg-[#404b6c] ">
        <div class=" h-full bg-cover bg-center bg-no-repeat bg-fixed" 
            :style="{ backgroundImage:`url(${bg3})`}"
        >
            <div class="fr-container py-24">
                <div class=" flex space-x-6 ">
                    <p class="text-center text-4xl font-bold font-[exo 2] leading-[45px] text-white">"Descubre el IV Congreso Regional: Explorando las Aplicaciones de la Inteligencia Artificial en la Amazonía Peruana" </p>
                    <!-- <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae enim sunt asperiores quaerat 
                        perspiciatis, distinctio eos facilis ad, aliquam exercitationem iste in laboriosam. Debitis 
                        consectetur sit temporibus et quae eligendi.
                    </p> -->
                    <div>
                        <!-- <Icon name="pepicons-pop:pinpoint" size="150" color="white"/> -->
                    </div>
                    <!-- <font-awesome-icon icon="fa-brands fa-github-square" size="10x" rotation="" flip="" inverse fixed-width/>                 -->
                </div>
            </div>
        </div>
    </section>
</template>