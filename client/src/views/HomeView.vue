<template>
  <div id="home-view" class="py-8 px-16 grid grid-cols-2">
    <EventsCard card_name="GENERAL EVENTS" :events="generalEvents" />
    <EventsCard card_name="PLACEMENT EVENTS" :events="generalEvents" />
    <EventsCard card_name="TRAINING EVENTS" :events="generalEvents" />
    <EventsCard card_name="RESEARCH PROJECTS" :events="generalEvents" />
  </div>
</template>
<script setup>
import EventsCard from "../components/home/eventsCard.vue";
import { ref } from "vue";

const generalEvents = ref([
  {
    event_name: "Guest Lecture on AI",
    event_date: "NOV 8",
    event_time: "12:30 PM",
  },
  {
    event_name: "Atrium Meet",
    event_date: "NOV 8",
    event_time: "2:00 PM",
  },
]);
</script>
