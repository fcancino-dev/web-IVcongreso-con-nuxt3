<template>
    <ul class="flex gap-2 font-bold fr-text text-sm text-white">
      <li>
        <NuxtLink class="fr-hover" to="/">HOME</NuxtLink>
      </li>
      <li>
        <NuxtLink class="fr-hover" to="/about">ABOUT</NuxtLink>
      </li>
      <li>
        <NuxtLink class=" fr-hover" to="/contact">CONTACT</NuxtLink>
      </li>
    </ul>
  </template>

  <style scoped>
  .fr-hover {
    transition: all 0.3s ease-in-out;
    padding: 0.5rem 1rem;
  }
  .fr-hover:hover {
    
    background-color: #cecdcd;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
  }
  </style>