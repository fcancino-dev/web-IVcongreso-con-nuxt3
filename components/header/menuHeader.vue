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
    <nav class=" h-[70px] w-full bg-transparent scroll z-20 fixed top-0 left-0 "
        :class="{'bg-white': scrolled, 'bg-transparent': !scrolled, 'navbar-height': scrolled}"
    >
        <div class="navbar-bg" v-if="scrolled"></div>
        <div class="fr-container  flex items-center justify-between py-[25px]">
            <NuxtLink to="/">
                <div class="flex items-center gap-3 text-white">
                    <img src="@/assets/images/favicon.ico" alt="logo"  />
                    <div
                         class="flex flex-col items- text-lg font-semibold  font-[exo 2]  leading-4"
                         :class="{ 'navbar-scrolled': scrolled }"
                    >
                        <span class=" text-lg font-semibold leading-[20px]">IV Congreso</span>
                        <p class="text-base font-normal leading-[20px]">Ingenieria de Sistemas</p>
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
    /* background-color: white; */
    color: black !important;
}
.navbar-height {
  height: 100px;
  
}
.navbar-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10px;
  /* background-color: white; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

</style>