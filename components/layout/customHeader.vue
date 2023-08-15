<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'

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
    <nav class=" w-full bg-transparent justify-center z-20 fixed items-center flex px-4" :class="{
        'bg-white': scrolled,
        'bg-transparent': !scrolled,
        'navbar-height': scrolled
    }">
        <div class="navbar-bg" v-if="scrolled"></div>
        <div class="w-full fr-container h-full flex items-center gap-4 justify-between md:py-[15px] lg:py-[25px]">
            <NuxtLink to="/">
                <div class="flex items-center gap-2 text-white">
                    <img src="@/assets/images/logo3.png" alt="logo2" class="flex xl:w-[45px] lg:w-[45px] md:w-[40px] w-[30px] " />
                    <div class="flex flex-col items- text-lg font-semibold leading-7 "
                        :class="{ 'navbar-scrolled': scrolled }">
                        <span class="pt-2 fr-text lg:text-2xl hidden font-bold lg:leading-[22px] lg:block">III Congreso</span>
                        <p class="fr-p text-sm font-normal hidden lg:leading-[28px] lg:block">Ingenieria de Sistemas</p>
                    </div>
                </div>
            </NuxtLink>

            <LayoutHeaderMenu :class="{ 'navbar-scrolled': scrolled }" class=" hidden md:flex lg:flex xl:flex"/>
            <!-- <LayoutHeaderMenu /> -->
        </div>
    </nav>
</template>

<style scoped>
nav {
    transition: background-color 0.3s, color 0.3s ease-in-out !important;
}

.navbar-scrolled {
    color: #060348 !important;
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