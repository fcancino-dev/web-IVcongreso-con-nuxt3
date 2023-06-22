<script setup>
import { ref } from 'vue'

const tabsDias = [
    { 
        // id: 1,
        date: "Lunes, 21 de Agosto",
        content: "Contenido del lunes"
    },
    { 
        // id: 2,
        date: "Martes, 22 de Agosto",
        content: "Contenido del martes"
    },
    { 
        // id: 3,
        date: "Miércoles, 23 de agosto",
        content: "Contenido del miércoles"
    },
    { 
        // id: 4,
        date: "Jueves, 24 de Agosto",
        content: "Contenido del jueves"
    },
    { 
        // id: 5,
        date: "Viernes, 25 de Agosto",
        content: "Contenido del viernes"
    },
]

const activeTab = ref(0)

</script>

<template>
    <section id="calendary" class="w-full bg-gray-200 py-24">
        <div class="fr-container">
            <div class="space-y-4">
                <p class="text-center text-4xl font-bold font-[exo 2] leading-[45px]">
                Calendario del IV Congreso
                </p>
                <p class="text-center text-gray-500 text-[20px] font-[exo 2]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam aliquam ea
                sint, aperiam minus unde tempore quaerat blanditiis ipsum ipsa magnam temporibus
                perspiciatis provident ullam! Consequatur enim aspernatur quia.
                </p>
            </div>
            <div class="pt-10">
                <div>
                    <div class="border-b border-b-gray-400">
                        <ul class="flex items-center gap-2 text-sm font-medium">
                            <li 
                                v-for="(tabs,index) in tabsDias" 
                                :key="index" 
                                class="flex-1"
                            >
                                <p 
                                    @click="activeTab = index"
                                    :class="{
                                        'bg-blue-500 text-white': activeTab === index,
                                        'text-gray-500 hover:bg-gray-50 hover:text-gray-700': activeTab !== index
                                    }"
                                    class=" flex items-center justify-center gap-2 rounded-t-[6px] px-3 py-2 text-gray-500 cursor-pointer"
                                >
                                    {{ tabs.date }}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mt-8">
                    <div v-for="(tabs, index) in tabsDias" :key="index" >
                        <div :id="index" v-show="activeTab === index">
                            <!-- Contenido para la pestaña actual -->
                            <p>{{ tabs.content }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style></style>
