<template>
  <div class="font-nunito">
    <HeaderNav />
    <div class="px-64 py-14">
      <div class="flex justify-between gap-14">
        <div class="flex flex-col justify-between w-4/6">
          <div class="">
            <img src="../assets/images/landscape.jpg" alt="paysage" class="w-full h-auto object-cover" />
          </div>
          <div class="pt-5">
            <p class="tag">Actualité</p>
            <h2 class="font-title font-bold text-5xl mt-2">La Roumanie encore et toujours</h2>
            <p class="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut laudantium aspernatur voluptatibus. Ad natus laborum placeat eum delectus aliquid
              expedita debitis, iure illum ea repellat fugiat id facere nam...
            </p>
            <p class="mt-2"><span class="font-semibold">C. Le Cam </span> | 12 Décembre 2023</p>
          </div>
        </div>
        <div class="flex flex-col justify-between">
          <div class="relative text-white h-80">
            <img src="../assets/images/meeting.jpg" alt="paysage" class="h-full object-cover" />
            <div class="absolute top-0 h-full bg-black bg-opacity-50 w-full flex flex-col justify-end">
              <div class="p-3">
                <p class="tag-second">Actualité</p>
                <h2 class="font-title font-bold text-2xl mt-2">Compte rendu de l’assemblée générale du 28 novembre</h2>
                <p class="mt-2"><span class="font-semibold">C. Le Cam </span> | 12 Décembre 2023</p>
              </div>
            </div>
          </div>
          <div class="relative text-white h-80">
            <img src="../assets/images/meeting.jpg" alt="paysage" class="h-full object-cover" />
            <div class="absolute top-0 h-full bg-black bg-opacity-50 w-full flex flex-col justify-end">
              <div class="p-3">
                <p class="tag-second">Actualité</p>
                <h2 class="font-title font-bold text-2xl mt-2">Compte rendu de l’assemblée générale du 28 novembre</h2>
                <p class="mt-2"><span class="font-semibold">C. Le Cam </span> | 12 Décembre 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-4 mt-12">
        <div class="">
          <img src="../assets/images/plane.jpg" alt="paysage" class="h-80 w-full object-cover" />
          <div class="pt-5">
            <p class="tag">Actualité</p>
            <h2 class="font-title font-bold text-3xl mt-2">La Roumanie encore et toujours</h2>
            <p class="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut laudantium aspernatur voluptatibus. Ad natus laborum placeat eum delectus aliquid
              expedita debitis, iure illum ea repellat fugiat id facere nam...
            </p>
            <p class="mt-2"><span class="font-semibold">C. Le Cam </span> | 12 Décembre 2023</p>
          </div>
        </div>
        <div class="">
          <img src="../assets/images/cab.jpg" alt="paysage" class="h-80 w-full object-cover" />
          <div class="pt-5">
            <p class="tag">Actualité</p>
            <h2 class="font-title font-bold text-3xl mt-2">La Roumanie encore et toujours</h2>
            <p class="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut laudantium aspernatur voluptatibus. Ad natus laborum placeat eum delectus aliquid
              expedita debitis, iure illum ea repellat fugiat id facere nam...
            </p>
            <p class="mt-2"><span class="font-semibold">C. Le Cam </span> | 12 Décembre 2023</p>
          </div>
        </div>
        <div class="">
          <img src="../assets/images/traffic.jpg" alt="paysage" class="h-80 w-full object-cover" />
          <div class="pt-5">
            <p class="tag">Actualité</p>
            <h2 class="font-title font-bold text-3xl mt-2">La Roumanie encore et toujours</h2>
            <p class="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut laudantium aspernatur voluptatibus. Ad natus laborum placeat eum delectus aliquid
              expedita debitis, iure illum ea repellat fugiat id facere nam...
            </p>
            <p class="mt-2"><span class="font-semibold">C. Le Cam </span> | 12 Décembre 2023</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderNav from "../components/HeaderNav.vue";
import { ref, onMounted } from "vue";
import { fetchActualites, fetchInfos, fetchEvenements, fetchMain } from "../../modules/fetchApi";

const ActuArticles = ref([]);
const InfosArticles = ref([]);
const EventsArticles = ref([]);
const MainArticle = ref([]);

onMounted(async () => {
  try {
    ActuArticles.value = await fetchActualites();
    InfosArticles.value = await fetchInfos();
    EventsArticles.value = await fetchEvenements();
    MainArticle.value = await fetchMain();

    console.log(ActuArticles.value);
    console.log(InfosArticles.value);
    console.log(EventsArticles.value);
    console.log(MainArticle.value);
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error.message);
    // Gérez l'erreur ici si nécessaire
  }
});
</script>
