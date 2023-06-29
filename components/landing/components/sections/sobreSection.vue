<script lang="ts" setup>
import location from '@/assets/images/location.svg'

const onClick = () => {
    console.log('click')
}


</script>

<template>
    <section class=" w-full bg-white py-24">
        <div class="fr-container">
            <div class=" space-y-16">
                <div class=" space-y-2">
                    <h1 class="fr-text text-4xl font-black leading-[60px]">Sobre III Congreso Regional</h1>
                    <p class="fr-p text-[16.5px] leading-6"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nihil laboriosam tempore perspiciatis 
                        quam perferendis quaerat nulla voluptate rerum accusamus iure soluta consequuntur quo, officiis omnis 
                        optio expedita explicabo repellendus. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, odit optio? Cum, quas 
                        reprehenderit minima quam nemo dolorum nam magnam. Non labore ratione sunt repellat deserunt dolor 
                        laborum qui vero?
                    </p>
                </div>
                <div class="flex justify-start mt-8 space-x-44">    
                    <div class="flex space-x-28">
                        <GeneralDivCd  text1="CUANDO" text2="Lunes - Viernes" text3="Del 21 al 25 de Agosto 2023"/>
                        <!-- <GeneralDivCd  icon="calendar-check" text1="CUANDO" text2="Lunes - Viernes" text3="Del 21 al 25 de Agosto 2023"/> -->
                        <!-- <span class="bg-[#ff3d00] w-1 h-23"></span>  -->
                        <GeneralDivCd :name="location" text1="DONDE" text2="Aula Magna de la UNAP" text3="Iquitos, Perú"/>
                    </div>
                    <GeneralButton text="CALENDARIO DEL III CONGRESO" :onClick="onClick"/>
                </div>
            </div>
        </div>
    </section>       
</template>