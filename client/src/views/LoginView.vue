<template>
  <div id="login-view" class="flex flex-col justify-center items-center">
    <p class="text-4xl font-medium my-4">REC Student Portal</p>
    <form method="post" class="flex flex-col items-center">
      <input
        class="bg-neutral-800 text-white w-96 px-6 py-2 mt-4 mb-2 rounded-md"
        placeholder="Email"
        type="email"
        name=""
        id=""
      />
      <input
        class="bg-neutral-800 text-white w-96 px-6 py-2 mb-4 mt-2 rounded-md"
        placeholder="Password"
        type="password"
        name=""
        id=""
      />
      <button
        class="bg-blue-600 max-w-fit px-12 text-white py-2 my-4 rounded-md"
        type="submit"
        @click="login"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const login = () => {
  router.replace("/");
};
</script>
