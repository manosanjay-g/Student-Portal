<template>
  <div id="my-profile-view" class="py-8 px-16">
    <p class="text-4xl font-semibold">Personal Info</p>
    <div class="personal-details">
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">Name</p>
        :
        <p class="basis-1/2 text-center">
          {{ authStore.$state.userData.name }}
        </p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">Roll No</p>
        :
        <p class="basis-1/2 text-center">
          {{ authStore.$state.userData.roll_no }}
        </p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">Course</p>
        :
        <p class="basis-1/2 text-center">
          {{ authStore.$state.userData.course }}
        </p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">Current Semester</p>
        :
        <p class="basis-1/2 text-center">
          {{ authStore.$state.userData.current_semester }}
        </p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">Date of birth</p>
        :
        <p class="basis-1/2 text-center">{{ authStore.$state.userData.dob }}</p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">Date of Joining</p>
        :
        <p class="basis-1/2 text-center">{{ authStore.$state.userData.doj }}</p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">Sex</p>
        :
        <p class="basis-1/2 text-center">{{ authStore.$state.userData.sex }}</p>
      </div>

      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">Place of birth</p>
        :
        <p class="basis-1/2 text-center">
          {{ authStore.$state.userData.place_of_birth }}
        </p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">Department</p>
        :
        <p class="basis-1/2 text-center">
          {{ authStore.$state.userData.department }}
        </p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">Supervisor</p>
        :
        <p class="basis-1/2 text-center">
          {{ authStore.$state.userData.supervisor }}
        </p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">College Mail</p>
        :
        <p class="basis-1/2 text-center">
          {{ authStore.$state.userData.college_email }}
        </p>
      </div>
    </div>
    <p class="text-4xl font-semibold mt-8">Educational Info</p>
    <div class="educational-details">
      <div class="my-2 flex flex-row items-center py-6">
        <p class="basis-1/3 text-center">Qualification</p>

        <p class="basis-1/3 text-center">Percentage</p>
        <p class="basis-1/3 text-center">Year of Passing</p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/3 text-center">SSC</p>

        <p class="basis-1/3 text-center">
          {{ authStore.$state.userData.ssc.percentage }}%
        </p>
        <p class="basis-1/3 text-center">
          {{ authStore.$state.userData.ssc.year_of_passing }}
        </p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/3 text-center">HSC</p>

        <p class="basis-1/3 text-center">
          {{ authStore.$state.userData.hsc.percentage }}%
        </p>
        <p class="basis-1/3 text-center">
          {{ authStore.$state.userData.hsc.year_of_passing }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "../../stores/authStore";
import { onMounted } from "vue";

const authStore = useAuthStore();
onMounted(() => {
  authStore.getUserInfo();
});
</script>
