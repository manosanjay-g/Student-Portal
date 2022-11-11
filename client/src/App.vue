<script setup>
import NavigationBar from "./components/core/NavigationBar.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
// const router = useRouter();
const route = useRoute();
let currentRoute = computed(() => {
  return route.name;
});
// const routePage = (pageName) => {
//   router.push(pageName);
// };
</script>

<template>
  <div id="global" class="flex flex-row bg-neutral-900 text-white min-h-screen">
    <NavigationBar
      v-if="currentRoute != 'login'"
      class="bg-neutral-900 lg:basis-1/4 max-h-screen sticky left-0 top-0 z-50"
    />
    <RouterView
      v-if="currentRoute != 'login'"
      class="bg-neutral-800 lg:basis-3/4 relative"
    />
    <RouterView v-else class="bg-neutral-900 min-w-full" />
  </div>
</template>
<style></style>
