<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "./components/core/NavigationBar.vue";
</script>

<template>
  <div id="global" class="flex flex-row bg-neutral-900 text-white min-h-screen">
    <NavigationBar
      class="bg-neutral-900 lg:basis-1/4 max-h-screen sticky left-0 top-0 z-50"
    />
    <RouterView class="bg-neutral-800 lg:basis-3/4 relative" />
  </div>
</template>
<style></style>
