<template>
  <div>
    <HeaderNav />
    <div class="mx-28 my-10">
      <div class="grid grid-cols-3 gap-8">
        <div class="grid-flow-col col-span-2 row-span-2">
          <img src="../assets/images/landscape.jpg" alt="paysage" class="w-full object-cover" />
          <p class="tag">Actualité</p>
          <h2>La Roumanie encore et toujours</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut laudantium aspernatur voluptatibus. Ad natus laborum placeat eum delectus aliquid
            expedita debitis, iure illum ea repellat fugiat id facere nam...
          </p>
        </div>
        <div class="">
          <img src="../assets/images/meeting.jpg" alt="paysage" class="h-full object-cover" />
        </div>
        <div class="">
          <img src="../assets/images/meeting.jpg" alt="paysage" class="h-full object-cover" />
        </div>
        <div class=""><img src="../assets/images/cab.jpg" alt="paysage" class="h-full object-cover" /></div>
        <div class=""><img src="../assets/images/meeting.jpg" alt="paysage" class="h-full object-cover" /></div>
        <div class=""><img src="../assets/images/meeting.jpg" alt="paysage" class="h-full object-cover" /></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderNav from "../components/HeaderNav.vue";
</script>
