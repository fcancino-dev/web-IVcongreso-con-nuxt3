<script setup>
import { ref, onMounted,onBeforeMount } from 'vue'

const scrolled = ref(false)

const handleScroll = () => {
    scrolled.value = window.scrollY > 0
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeMount(() => {
    window.removeEventListener('scroll', handleScroll)
})


</script>

<template>
    <nav class=" w-full bg-transparent z-20 fixed top-0 left-0 "
        :class="{
            'bg-white': scrolled, 
            'bg-transparent': !scrolled, 
            'navbar-height': scrolled
        }"
    >
        <div class="navbar-bg" v-if="scrolled"></div>
        <div class=" fr-container h-full flex items-center justify-between py-[25px]">
            <NuxtLink to="/">
                <div class="flex items-center gap-3 text-white">
                    <div>
                        <img  src="@/assets/images/logo3.png" alt="logo2" class="flex w-[45px]" />
                    </div>
                    <div
                         class="flex flex-col items- text-lg font-semibold  font-[exo 2]  leading-7"
                         :class="{ 'navbar-scrolled': scrolled }"
                    >
                        <span class="pt-2 fr-text text-2xl font-bold leading-[22px]">III Congreso</span>
                        <p class="fr-p text-sm font-normal leading-[28px]">Ingenieria de Sistemas</p>
                    </div>
                </div>
            </NuxtLink>

            <HeaderCustomHeader :class="{ 'navbar-scrolled': scrolled }"/>
        </div>
    </nav>
</template>

<style scoped>

nav {
    transition: background-color 0.3s, color 0.3s ease-in-out !important; 
}

.navbar-scrolled {
    color: black !important;
}
.navbar-height {
    height: 80px;
    
  
}
.navbar-bg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


</style>