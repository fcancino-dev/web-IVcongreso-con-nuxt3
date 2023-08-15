<script lang="ts" setup>
import speakerbg from '@/assets/images/speaker-bg2.jpg';

interface Speaker {
    id: number;
    name: string;
    role: string;
    companyName: string;
}

const speakers: Speaker[] = [
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
            :style="{ backgroundImage:`url(${speakerbg})`}"
        >
            <div class="fr-container pt-24 px-4 md:px-0 pb-[56px]">
                <div class="space-y-10">
                    <div class=" space-y-2">
                        <h1 class="fr-text text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-black md:leading-[60px] flex justify-center text-center">Ponentes Principales del III Congreso</h1>
                        <p class="fr-p text-base md:text-lg lg:text-[1.13rem] xl:text-[1.25rem] leading-6 text-gray-500 text-center"> 
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