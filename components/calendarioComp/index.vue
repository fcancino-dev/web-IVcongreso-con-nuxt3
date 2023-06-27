<script setup>
import { ref } from 'vue'

const tabsDias = [
    { 
        // id: 1,
        date: "Lunes, 21 de Agosto",
        // content: "Contenido del lunes",
        contentSlot: 'tabContent1'
    },
    { 
        // id: 2,
        date: "Martes, 22 de Agosto",
        // content: "Contenido del martes",
        contentSlot: 'tabContent2'
    },
    { 
        // id: 3,
        date: "Miércoles, 23 de agosto",
        contentSlot: 'tabContent3'
    },
    { 
        // id: 4,
        date: "Jueves, 24 de Agosto",
        contentSlot: 'tabContent4'
    },
    { 
        // id: 5,
        date: "Viernes, 25 de Agosto",
        contentSlot: 'tabContent5'
    },
]

const activeTab = ref(0)

</script>

<template>
    <div class="pt-10">
        <div>
            <div class="border-b border-b-gray-400">
                <ul class="flex items-center gap-2 text-[15px] font-bold">
                    <li v-for="(tabs, index) in tabsDias" :key="index" class="flex-1">
                        <p  @click="activeTab = index" 
                            :class="{
                            'bg-[#100a6e] text-white': activeTab === index,
                            'text-gray-500 hover:bg-gray-50 hover:text-gray-700': activeTab !== index,
                            }"
                            class="flex items-center justify-center gap-2 rounded-t-[6px] px-3 py-2 text-gray-500 cursor-pointer"
                        >
                            {{ tabs.date }}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mt-14">
            <div v-for="(tabs, index) in tabsDias" :key="index">
                <div :id="index" v-show="activeTab === index">
                    <!-- Contenido para la pestaña actual -->
                    <slot :name="tabs.contentSlot"/>
                    <!-- <p>{{ tabs.content }}</p> -->
                </div>
            </div>
        </div>
    </div>
</template>
