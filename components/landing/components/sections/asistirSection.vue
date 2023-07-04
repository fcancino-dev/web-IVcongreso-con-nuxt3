<script setup lang="ts">
import notebook from '@/assets/icons/notebook.svg'
import idcard from '@/assets/icons/id-card-1.svg'

interface Data {
    title: String;
    subtitle: String;
    icon?: String;
}

const dataCard: Data[] = [
    {
        title: "Talleres especializados",
        subtitle:"Conoce a los mejores profesionales de la industria. Lorem ipsum dolor sit amet, consectetur adipisicing elit, consectetur",
        icon: notebook,
    },
    {
        title: "Conferencias magistrales",
        subtitle:"Conoce a los mejores profesionales de la industria. Lorem ipsum dolor sit amet, consectetur adipisicing elit, consectetur ",
    },
    {
        title: "200 Asientos disponibles",
        subtitle:"Conoce a los mejores profesionales de la industria. Lorem ipsum dolor sit amet, consectetur adipisicing elit, consectetur ",
        icon: idcard,
    }

]

</script>

<template>
    <section class=" w-full bg-white py-24">
        <div class="fr-container">
            <div class=" space-y-2 mb-10">
                <h1 class="fr-text text-4xl font-black leading-[60px] flex justify-center">¿Por qué deberías asistir?</h1>
                <div class=" w-full ">
                    <div class=" px-[190px]">
                        <p class="fr-p text-center text-gray-500 text-[1.25rem]">
                            El III Congreso Regional de Ingenieria de Sistemas reunió a las mentes más brillantes del mundo de la tecnología. Aprende nuevas habilidades ¡Y obtenga información de expertos y profesionales de todo el mundo!
                        </p>
                    </div>
                </div>
            </div>
            <div class=" flex gap-4">
                <GeneralCardAsistir
                    v-for="item in dataCard"
                    :key="item.title"
                    :name="item.icon"
                    :title="item.title"
                    :subtitle="item.subtitle"
                />
            </div>
        </div>
    </section>
</template>

<style scoped></style>