<template>
  <div
    id="navigation-bar"
    class="flex flex-col items-center justify-center text-center"
  >
    <div id="user-info">
      <p class="text-3xl font-semibold mt-4 mb-2">{{ userDetails.name }}</p>
      <p class="text-slate-400 text-xl">{{ userDetails.course }}</p>
    </div>
    <div id="nav-items" class="my-8">
      <router-link to="/"
        ><p class="my-4 text-2xl text-medium">Home</p></router-link
      >
      <router-link to="/my-info/exam-results/123"
        ><p class="my-4 text-2xl text-medium">Exam Results</p></router-link
      >
      <router-link to="/my-info/my-profile/123"
        ><p class="my-4 text-2xl text-medium">My Profile</p></router-link
      >
      <router-link to="/attendance"
        ><p class="my-4 text-2xl text-medium">Attendance</p></router-link
      >
    </div>
    <p class="text-xl text-red-600 font-medium cursor-pointer">Log out</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const userDetails = ref({
  name: "Mano Sanjay",
  course: "B.E Computer Science and Engineering",
});
</script>
