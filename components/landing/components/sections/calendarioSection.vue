<script setup>

const tabsDias = [
    { date: "Lunes, 21 de Agosto" },
    { date: "Martes, 22 de Agosto"},
    { date: "Miércoles, 23 de agosto"},
    { date: "Jueves, 24 de Agosto"},
    { date: "Viernes, 25 de Agosto"},
]

</script>

<template>
    <section class="w-full bg-gray-300 py-24">
        <div class="fr-container">
            <div class="space-y-4">
                <p class="text-center text-4xl font-bold font-[exo 2] leading-[45px]">
                Calendario del IV Congreso
                </p>
                <p class="text-center text-[16.5px] font-[exo 2]">
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
                                v-for="tabs in tabsDias" 
                                :key="tabs.id" 
                                class="flex-1"
                            >
                                <nuxt-link 
                                    to=""
                                    class=" flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-3 py-2 text-white hover:bg-blue-600"
                                >
                                    {{ tabs.date }}
                                </nuxt-link>
                            </li>
                            <!-- <li class="flex-1">
                                <nuxt-link 
                                    to=""
                                    class="flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                >
                                    Martes, 22 de Agosto
                                </nuxt-link>
                            </li>-->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
