<script lang="ts" setup>
import location from '@/assets/icons/location.svg'

const onClick = () => {
    const calendarioElement = document.getElementById('calendary');
    if(calendarioElement){
        calendarioElement.scrollIntoView({behavior: "smooth"});
    }
}


</script>

<template>
    <section class=" w-full bg-white py-24 px-4 md:px-0">
        <div class="fr-container ">
            <div class=" md:space-y-16">
                <div class=" space-y-2">
                    <h1 class="fr-text text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-black leading-[60px]">Sobre III Congreso Regional</h1>
                    <p class="fr-p text-sm lg:text-[1rem] xl:text-[1.05rem] leading-6"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nihil laboriosam tempore perspiciatis 
                        quam perferendis quaerat nulla voluptate rerum accusamus iure soluta consequuntur quo, officiis omnis 
                        optio expedita explicabo repellendus. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, odit optio? Cum, quas 
                        reprehenderit minima quam nemo dolorum nam magnam. Non labore ratione sunt repellat deserunt dolor 
                        laborum qui vero?
                    </p>
                </div>
                <div class="flex flex-col md:flex-row items-center md:items-start md:justify-center lg:justify-start mt-8 content-center md:space-x-10 lg:space-x-20 xl:space-x-44 space-y-10 md:space-y-0" >    
                    <div class="flex space-x-6 md:space-x-5 lg:space-x-28">
                        <GeneralDivCd  text1="CUANDO" text2="Lunes - Viernes" text3="Del 21 al 25 de Agosto 2023"/>
                        <!-- <span class="bg-[#ff3d00] w-1 h-23"></span>  -->
                        <GeneralDivCd :name="location" text1="DONDE" text2="Aula Magna de la UNAP" text3="Iquitos, Perú"/>
                    </div>
                    <GeneralButton text="CALENDARIO DEL III CONGRESO" :onClick="onClick"/>
                </div>
            </div>
        </div>
    </section>       
</template>