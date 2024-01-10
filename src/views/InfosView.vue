<template>
  <div class="font-nunito">
    <HeaderNav />
    <div class="px-64 py-14">
      <div v-if="mainArticle">
        <div class="flex justify-between gap-14">
          <div class="flex flex-col justify-between w-3/5">
            <div class="">
              <img :src="'http://localhost:1337' + mainArticle.image.url" :alt="mainArticle.image.alternativeText" class="object-cover" />
            </div>
            <div>
              <p class="tag">{{ mainArticle.tag }}</p>
              <h2 class="font-title font-bold text-5xl mt-2">{{ mainArticle.title }}</h2>
              <p class="mt-2 truncate">
                {{ mainArticle.text }}
              </p>
              <p class="mt-2">
                <span class="font-semibold">{{ mainArticle.author }} </span> | {{ mainArticle.date }}
              </p>
            </div>
          </div>

          <div class="flex flex-col justify-between gap-4">
            <div v-for="eventArticle in eventsArticles.slice(0, 2)" :key="eventArticle.id">
              <div class="relative text-white h-96">
                <img :src="'http://localhost:1337' + eventArticle.image.url" :alt="eventArticle.image.alternativeText" class="h-full object-cover" />
                <div class="absolute top-0 h-full bg-black bg-opacity-50 w-full flex flex-col justify-end">
                  <div class="p-5">
                    <p class="tag-second">{{ eventArticle.tag }}</p>
                    <h2 class="font-title font-bold text-2xl mt-2">{{ eventArticle.title }}</h2>
                    <p class="mt-2">
                      <span class="font-semibold">{{ eventArticle.author }} </span> | {{ eventArticle.date }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-4 mt-12">
        <div v-for="article in remainingArticles.slice(0, 3)" :key="article.id">
          <img :src="'http://localhost:1337' + article.image.url" :alt="article.image.alternativeText" class="h-80 w-full object-cover" />
          <div class="pt-5">
            <p class="tag">{{ article.tag }}</p>
            <h2 class="font-title font-bold text-3xl mt-2">{{ article.title }}</h2>
            <p class="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut laudantium aspernatur voluptatibus. Ad natus laborum placeat eum delectus aliquid
              expedita debitis, iure illum ea repellat fugiat id facere nam...
            </p>
            <p class="mt-2">
              <span class="font-semibold">{{ article.author }} </span> | {{ article.date }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderNav from "../components/HeaderNav.vue";
import { ref, onMounted } from "vue";
import { fetchRemaining, fetchEvenements, fetchMain } from "../../modules/fetchApi";

const mainArticle = ref(null);
const eventsArticles = ref([]);
const remainingArticles = ref([]);

onMounted(async () => {
  try {
    const mainArticles = await fetchMain();
    mainArticle.value = mainArticles[0];
    remainingArticles.value = await fetchRemaining();
    eventsArticles.value = await fetchEvenements();
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error.message);
  }
});
</script>
