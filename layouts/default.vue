<template>
    <div class="w-full fr-wrapper">
        <div class=" w-full">
        <header>
            <HeaderMenuHeader class="fixed z-10"/>  
        </header>
        <main>
            <slot/>
        </main>
        <footer>
            <FooterCustom/>
        </footer>
        </div>
    </div>
</template>