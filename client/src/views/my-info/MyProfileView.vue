<template>
  <div id="my-profile-view" class="py-8 px-16">
    <p class="text-4xl font-semibold">Personal Info</p>
    <div class="personal-details">
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">Name</p>
        :
        <p class="basis-1/2 text-center">{{ userInfo.name }}</p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">Roll No</p>
        :
        <p class="basis-1/2 text-center">{{ userInfo.rollNo }}</p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">Role</p>
        :
        <p class="basis-1/2 text-center">{{ userInfo.role }}</p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">Course</p>
        :
        <p class="basis-1/2 text-center">{{ userInfo.course }}</p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">Current Semester</p>
        :
        <p class="basis-1/2 text-center">{{ userInfo.current_semester }}</p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">Date of birth</p>
        :
        <p class="basis-1/2 text-center">{{ userInfo.dob }}</p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">Date of Joining</p>
        :
        <p class="basis-1/2 text-center">{{ userInfo.doj }}</p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">Sex</p>
        :
        <p class="basis-1/2 text-center">{{ userInfo.sex }}</p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">Blood Group</p>
        :
        <p class="basis-1/2 text-center">{{ userInfo.blood_group }}</p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">Place of birth</p>
        :
        <p class="basis-1/2 text-center">{{ userInfo.place_of_birth }}</p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">Department</p>
        :
        <p class="basis-1/2 text-center">{{ userInfo.department }}</p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">Supervisor</p>
        :
        <p class="basis-1/2 text-center">{{ userInfo.supervisor }}</p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/2 text-center">College Mail</p>
        :
        <p class="basis-1/2 text-center">{{ userInfo.college_mail }}</p>
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
          {{ userEducationalInfo.ssc.percentage }}
        </p>
        <p class="basis-1/3 text-center">
          {{ userEducationalInfo.ssc.year_of_passing }}
        </p>
      </div>
      <div
        class="my-4 flex flex-row rounded-md bg-neutral-900 items-center py-6"
      >
        <p class="basis-1/3 text-center">HSC</p>

        <p class="basis-1/3 text-center">
          {{ userEducationalInfo.hsc.percentage }}
        </p>
        <p class="basis-1/3 text-center">
          {{ userEducationalInfo.hsc.year_of_passing }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const userInfo = ref({
  name: "Mano Sanjay G",
  rollNo: "200701142",
  role: "Student",
  course: "B.E Computer Science and Engineering",
  current_semester: "5",
  doj: "07-11-2020",
  dob: "07-11-2001",
  sex: "Male",
  blood_group: "B+",
  place_of_birth: "Chennai",
  department: "Computer Science and Engineering",
  supervisor: "HOD CSE",
  college_mail: "200701142@rajalakshmi.edu.in",
});

const userEducationalInfo = ref({
  ssc: {
    percentage: "85%",
    year_of_passing: "2018",
  },
  hsc: {
    percentage: "85%",
    year_of_passing: "2020",
  },
});
</script>
