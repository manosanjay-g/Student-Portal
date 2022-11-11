<template>
  <div
    id="exam-results-card"
    class="mx-4 my-2 max-h-90 bg-neutral-900 rounded-lg text-center py-2"
  >
    <p class="px-2 py-2 text-2xl font-medium">
      END SEMESTER EXAMINATION RESULTS - EVEN 2021-22
    </p>
    <hr />
    <div class="flex flex-row px-4 m-4">
      <p class="basis-1/5 text-center">Semester</p>
      <p class="basis-1/5 text-center">Subject Code</p>
      <p class="basis-1/5 text-center">Subject Name</p>
      <p class="basis-1/5 text-center">Grade</p>
      <p class="basis-1/5 text-center">Result</p>
    </div>
    <div
      v-for="subject in props.subjects"
      :key="subject._id"
      class="m-4 flex flex-row rounded-md bg-neutral-800 items-center px-4 py-6"
    >
      <p class="basis-1/5 text-center">{{ subject.subject_semester }}</p>
      <p class="basis-1/5 text-center">{{ subject.subject_code }}</p>
      <p class="basis-1/5 text-center">{{ subject.subject_name }}</p>
      <p class="basis-1/5 text-center">{{ subject.subject_grade }}</p>
      <p class="basis-1/5 text-center">{{ subject.subject_result }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["subjects"]);
</script>
