<script setup>

const text = 'Calendario del Congreso'

const onClick = () => {
    console.log('click')
}

const when = 'CUANDO'
const dias = 'Lunes - Viernes'
const fecha = 'Del 21 al 25 de Agosto 2023'
const where = 'DONDE'
const lugar = 'Aula Magna de la UNAP'
const direccion = 'Iquitos, Perú'


</script>

<template>
    <section class=" w-full bg-white py-24">
        <div class="fr-container">
            <div class=" space-y-16">
                <div class=" space-y-2">
                    <h1 class="text-4xl font-bold font-[exo 2] leading-[60px]">Sobre IV Congreso Regional</h1>
                    <p class=" text-[16.5px] leading-6 font-[exo 2]"> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nihil laboriosam tempore perspiciatis 
                        quam perferendis quaerat nulla voluptate rerum accusamus iure soluta consequuntur quo, officiis omnis 
                        optio expedita explicabo repellendus. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, odit optio? Cum, quas 
                        reprehenderit minima quam nemo dolorum nam magnam. Non labore ratione sunt repellat deserunt dolor 
                        laborum qui vero?
                    </p>
                </div>
                <div class="flex justify-start mt-8 space-x-52">
                    <div class="flex space-x-20">
                        <GeneralDivCd :text1="when" :text2="dias" :text3="fecha"/>
                        <GeneralDivCd :text1="where" :text2="lugar" :text3="direccion"/>
                    </div>
                    <GeneralButton :text="text" :onClick="onClick"/>
                </div>
            </div>
        </div>
    </section>       
</template>