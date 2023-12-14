<template>
  <div class="px-10 py-4 bg-black text-white">
    <div class="flex justify-between items-center">
      <p class="text-3xl">Amitiés Taléa</p>
      <div class="flex gap-10 text-lg">
        <p :class="{ 'border-b-2 border-white': $route.path === '/' }" class="link">Accueil</p>
        <p :class="{ 'border-b-2 border-white': $route.path === '/events' }" class="link">Événements</p>
        <p :class="{ 'border-b-2 border-white': $route.path === '/info' }" class="link">Infos</p>
        <p :class="{ 'border-b-2 border-white': $route.path === '/news' }" class="link">Actualités</p>
        <p :class="{ 'border-b-2 border-white': $route.path === '/30years' }" class="link">30 ans</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
