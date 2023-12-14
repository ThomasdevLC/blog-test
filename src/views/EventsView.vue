<template>
  <div>
    <HeaderNav />
    <div class="px-32 py-12">
      <div class="w-full flex justify-between border-b-2 border-black pb-8 px-4">
        <div class="w-96">
          <p class="tag">Événements</p>
          <h2 class="font-title font-bold text-4xl mt-2">La Roumanie encore et toujours</h2>
          <p class="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut laudantium aspernatur voluptatibus. Ad natus laborum placeat eum delectus aliquid
            expedita debitis, iure illum ea repellat fugiat id facere nam...
          </p>
          <p class="mt-2"><span class="font-semibold">C. Le Cam </span> | 12 Décembre 2023</p>
          <p class="mt-4 text-2xl">Lire l'article</p>
        </div>
        <div class="w-96">
          <img src="../assets/images/plane.jpg" alt="paysage" class="h-80 w-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderNav from "../components/HeaderNav.vue";
</script>
