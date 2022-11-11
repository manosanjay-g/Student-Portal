<template>
  <div id="attendance-view" class="py-8 px-16">
    <AttendanceReportCard :subjects="subjectAttendanceReport" />
    <div class="flex flex-row mx-4 my-8 justify-between">
      <p class="text-xl font-medium">Total Percentage : 100%</p>
      <p class="text-xl font-medium">Updated on 29-09-2022</p>
    </div>
  </div>
</template>

<script setup>
import AttendanceReportCard from "../components/attendance/AttendanceReportCard.vue";
import { ref } from "vue";

const subjectAttendanceReport = ref([
  {
    subject_code: "CS19441",
    subject_name: "Operating Systems",
    subject_present: "20",
    subject_absent: "0",
    subject_total: "20",
  },
  {
    subject_present: "20",
    subject_code: "CS19442",
    subject_name: "Software Engineering",
    subject_absent: "0",
    subject_total: "20",
  },
  {
    subject_present: "20",
    subject_code: "CS19443",
    subject_name: "Database Management Systems",
    subject_absent: "0",
    subject_total: "20",
  },
  {
    subject_present: "20",
    subject_code: "CS19444",
    subject_name: "Probability and Statistics",
    subject_absent: "0",
    subject_total: "20",
  },
  {
    subject_present: "20",
    subject_code: "CS19445",
    subject_name: "Soft Skills",
    subject_absent: "0",
    subject_total: "20",
  },
]);
</script>
