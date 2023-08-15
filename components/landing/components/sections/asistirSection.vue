<script setup lang="ts">
import notebook from '@/assets/icons/notebook.svg'
import idcard from '@/assets/icons/id-card-1.svg'

interface Data {
    id?: number;
    title: string;
    subtitle: string;
    icon?: string;
}

const dataCard: Data[] = [
    {
        id: 1,
        title: "Talleres especializados",
        subtitle:"Conoce a los mejores profesionales de la industria. Lorem ipsum dolor sit amet, consectetur adipisicing elit, consectetur",
        icon: notebook,
    },
    {
        id: 2,
        title: "Conferencias magistrales",
        subtitle:"Conoce a los mejores profesionales de la industria. Lorem ipsum dolor sit amet, consectetur adipisicing elit, consectetur ",
    },
    {
        id: 3,
        title: "200 Asientos disponibles",
        subtitle:"Conoce a los mejores profesionales de la industria. Lorem ipsum dolor sit amet, consectetur adipisicing elit, consectetur ",
        icon: idcard,
    }

]

</script>

<template>
    <section class=" w-full bg-white py-24 px-4 md:px-0">
        <div class="fr-container">
            <div class=" space-y-2 mb-10">
                <h1 class="fr-text text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-black lg:leading-[60px] flex justify-center">¿Por qué deberías asistir?</h1>
                <div class=" w-full ">
                    <div class=" md:px-[40px] lg:px-[130px] xl:px-[190px]">
                        <p class="fr-p text-center text-gray-500 text-base md:text-lg lg:text-[1.13rem] xl:text-[1.25rem]">
                            El III Congreso Regional de Ingenieria de Sistemas reunió a las mentes más brillantes del mundo de la tecnología. Aprende nuevas habilidades ¡Y obtenga información de expertos y profesionales de todo el mundo!
                        </p>
                    </div>
                </div>
            </div>
            <div class=" flex gap-2">
                <GeneralCardAsistir
                    v-for="item in dataCard"
                    :key="item.id"
                    :name="item.icon"
                    :title="item.title"
                    :subtitle="item.subtitle"
                />
            </div>
        </div>
    </section>
</template>

<style scoped></style>