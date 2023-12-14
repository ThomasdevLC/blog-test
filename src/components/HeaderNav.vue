<template>
  <div class="px-10 py-4 bg-black text-white">
    <div class="flex justify-between items-center">
      <p class="text-3xl">Amitiés Taléa</p>
      <div class="flex gap-10 text-lg">
        <router-link :to="{ path: '/' }" :class="{ 'border-b-2 border-white': $route.path === '/' }" class="link">Accueil</router-link>
        <router-link :to="{ path: '/events' }" :class="{ 'border-b-2 border-white': $route.path === '/events' }" class="link">Événements</router-link>
        <router-link :to="{ path: '/info' }" :class="{ 'border-b-2 border-white': $route.path === '/info' }" class="link">Infos</router-link>
        <router-link :to="{ path: '/news' }" :class="{ 'border-b-2 border-white': $route.path === '/news' }" class="link">Actualités</router-link>
        <router-link :to="{ path: '/30years' }" :class="{ 'border-b-2 border-white': $route.path === '/30years' }" class="link">30 ans</router-link>
      </div>
    </div>
  </div>
</template>
