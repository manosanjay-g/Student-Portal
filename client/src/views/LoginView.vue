<template>
  <div id="login-view" class="flex flex-col justify-center items-center">
    <p class="text-4xl font-medium my-4">REC Student Portal</p>
    <form
      method="post"
      class="flex flex-col items-center"
      @submit.prevent="login"
    >
      <input
        class="bg-neutral-800 text-white w-96 px-6 py-2 mt-4 mb-2 rounded-md"
        placeholder="Email"
        type="email"
        name=""
        v-model="loginInfo.college_email"
        id=""
      />
      <input
        class="bg-neutral-800 text-white w-96 px-6 py-2 mb-4 mt-2 rounded-md"
        placeholder="Password"
        type="password"
        name=""
        v-model="loginInfo.password"
        id=""
      />

      <button
        class="bg-blue-600 max-w-fit px-12 text-white py-2 my-4 rounded-md"
        type="submit"
      >
        Login
      </button>
      <p v-if="authStore.$state.error" class="text-red-600">
        {{ authStore.$state.error }}
      </p>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useAuthStore } from "../stores/authStore";

const authStore = useAuthStore();

const loginInfo = reactive({
  college_email: "",
  password: "",
});
const login = () => {
  if (loginInfo.college_email == "" || loginInfo.password == "") {
    alert("All inputs are required");
  } else {
    authStore.login(loginInfo);
  }
};
</script>
