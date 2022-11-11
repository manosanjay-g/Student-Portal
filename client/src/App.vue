<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "./components/core/NavigationBar.vue";
</script>

<template>
  <div id="global" class="flex flex-row text-white min-h-screen">
    <NavigationBar class="bg-neutral-900 lg:basis-1/4" />
    <RouterView class="bg-neutral-800 lg:basis-3/4" />
  </div>
</template>
