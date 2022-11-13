<template>
  <div id="exam-results-view" class="py-8 px-16">
    <ExamResultsCard
      :subjects="authStore.$state.userData.current_semester_results.subjects"
      :name="authStore.$state.userData.current_semester_results.name"
    />
    <div class="flex flex-row mx-4 my-8 justify-between">
      <p class="text-xl font-medium">
        GPA : {{ authStore.$state.userData.current_semester_results.gpa }}
      </p>
      <p class="text-xl font-medium">
        Result Published on
        {{ new Date(authStore.$state.userData.updatedAt).toLocaleDateString() }}
      </p>
    </div>
    <div>
      <p class="text-xl mx-4">
        For Students admitted from 2021 onwards: WH - With Held, U -
        Re-appearance, SA - Shortage of Attendance <br />For others : WH - With
        Held, RA* - Absent, RA - Re-appearance<br /><br />
        ** WH - Please Contact Admin <br /><br />Disclaimer: The result
        published at www.rajalakshmi.in is PROVISIONAL only. We are not
        responsible for any inadvertent error that may have crept in the data /
        results being published on the Internet. This is being published on the
        Internet just for immediate information to the examinees. The final mark
        sheets issued by the College should only be treated authentic and final
        in this regard.
      </p>
    </div>
  </div>
</template>

<script setup>
import ExamResultsCard from "../../components/my-info/ExamResultsCard.vue";
import { useAuthStore } from "../../stores/authStore";

const authStore = useAuthStore();
</script>
