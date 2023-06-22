<script setup>
import speaker1 from '@/assets/images/speaker-fondo.png';

const speakers = [
    {
        id: 1,
        name: 'Jonathan Barnes',
        role: 'Founder & Ex.Chairman',
        companyName: 'Company Name',
    },
    {
        id: 2,
        name: 'Jonathan Barnes',
        role: 'Founder & Ex.Chairman',
        companyName: 'Company Name',
    },
    {   
        id: 3,
        name: 'Jonathan Barnes',
        role: 'Founder & Ex.Chairman',
        companyName: 'Company Name',
    },
    {
        id: 4,
        name: 'Jessica Barnes',
        role: 'Founder & Ex.Chairman',
        companyName: 'Company Name',
    },
    {
        id: 5,
        name: 'Jessica Barnes',
        role: 'Founder & Ex.Chairman',
        companyName: 'Company Name',
    },
    {
        id: 6,
        name: 'Jessica Barnes',
        role: 'Founder & Ex.Chairman',
        companyName: 'Company Name',
    },
    {
        id: 7,
        name: 'Jessica Barnes',
        role: 'Founder & Ex.Chairman',
        companyName: 'Company Name',
    },
    {
        id: 8,
        name: 'Jessica Barnes',
        role: 'Founder & Ex.Chairman',
        companyName: 'Company Name',
    }
];

</script>

<template>
    <section class=" w-full bg-gray-200 ">
        <div class=" h-full bg-cover bg-center bg-no-repeat bg-fixed" 
            :style="{ backgroundImage:`url(${speaker1})`}"
        >
            <div class="fr-container pt-24 pb-[56px]">
                <div class="space-y-10">
                    <div class=" space-y-2">
                        <h1 class="text-4xl font-bold font-[exo 2] leading-[60px] flex justify-center">Ponentes Principales del IV Congreso</h1>
                        <p class="text-[20px] leading-6 text-gray-500 text-center font-[exo 2]"> 
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus deleniti fugit officia officiis,
                            odio asperiores necessitatibus veritatis sequi dicta consectetur? Pariatur cum, numquam cupiditate
                        </p>
                    </div>
                    <div class="flex flex-wrap justify-center">
                        <GeneralCard
                            class="pr-[22.5px] pb-10" 
                            v-for="speaker in speakers " 
                            :key="speaker.id"
                            :speaker="speaker.name"
                            :role="speaker.role"
                            :companyName="speaker.companyName"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>