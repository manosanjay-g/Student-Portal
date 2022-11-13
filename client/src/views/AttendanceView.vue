<template>
  <div id="attendance-view" class="py-8 px-16">
    <AttendanceReportCard
      :subjects="authStore.$state.userData.attendance_details.subjects"
      :name="authStore.$state.userData.attendance_details.name"
    />
    <div class="flex flex-row mx-4 my-8 justify-between">
      <p class="text-xl font-medium">
        Total Percentage : {{ totalPercentage }}%
      </p>
      <p class="text-xl font-medium">
        Updated on
        {{
          new Date(
            authStore.$state.userData.attendance_details.updatedAt
          ).toLocaleDateString()
        }}
      </p>
    </div>
  </div>
</template>

<script setup>
import AttendanceReportCard from "../components/attendance/AttendanceReportCard.vue";
import { computed } from "vue";
import { useAuthStore } from "../stores/authStore";

const authStore = useAuthStore();

const totalPercentage = computed(() => {
  var total = 0;
  for (
    let index = 0;
    index < authStore.$state.userData.attendance_details.subjects.length;
    index++
  ) {
    const subjectPercentage =
      (authStore.$state.userData.attendance_details.subjects[index]
        .subject_present /
        authStore.$state.userData.attendance_details.subjects[index]
          .subject_total) *
      100;
    total += subjectPercentage;
  }
  return total / 5;
});
</script>
