<template>
  <div id="exam-results-view" class="py-8 px-16">
    <ExamResultsCard :subjects="examResult" />
    <div class="flex flex-row mx-4 my-8 justify-between">
      <p class="text-xl font-medium">GPA : 8.80</p>
      <p class="text-xl font-medium">Result Published on 29-09-2022</p>
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
import { ref } from "vue";

const examResult = ref([
  {
    subject_semester: "4",
    subject_code: "CS19441",
    subject_name: "Operating Systems",
    subject_grade: "A+",
    subject_result: "Pass",
  },
  {
    subject_semester: "4",
    subject_code: "CS19442",
    subject_name: "Software Engineering",
    subject_grade: "A+",
    subject_result: "Pass",
  },
  {
    subject_semester: "4",
    subject_code: "CS19443",
    subject_name: "Database Management Systems",
    subject_grade: "A+",
    subject_result: "Pass",
  },
  {
    subject_semester: "4",
    subject_code: "CS19444",
    subject_name: "Probability and Statistics",
    subject_grade: "A+",
    subject_result: "Pass",
  },
  {
    subject_semester: "4",
    subject_code: "CS19445",
    subject_name: "Soft Skills",
    subject_grade: "A+",
    subject_result: "Pass",
  },
]);
</script>
