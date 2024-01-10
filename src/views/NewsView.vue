<template>
  <div>
    <HeaderNav />
    <div class="px-48 py-12">
      <div v-for="newsArticle in newsArticles" :key="newsArticle.id">
        <div class="w-full flex justify-around border-b-2 border-black py-8">
          <div class="w-3/5">
            <h2 class="font-title font-bold text-5xl mt-2">{{ newsArticle.title }}</h2>
            <p class="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut laudantium aspernatur voluptatibus. Ad natus laborum placeat eum delectus aliquid
              expedita debitis, iure illum ea repellat fugiat id facere nam...
            </p>
            <p class="mt-2"><span class="font-semibold">C. Le Cam </span> | 12 Décembre 2023</p>
            <div class="align-bottom">
              <p class="mt-4 text-2xl">Lire l'article <span class="material-symbols-outlined"> north_east </span></p>
            </div>
          </div>
          <div class="w-96">
            <img src="../assets/images/meeting.jpg" alt="paysage" class="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderNav from "../components/HeaderNav.vue";
import { ref, onMounted } from "vue";
import { fetchActualites } from "../../modules/fetchApi";

const newsArticles = ref([]);

onMounted(async () => {
  try {
    newsArticles.value = await fetchActualites();
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error.message);
  }
});
</script>
