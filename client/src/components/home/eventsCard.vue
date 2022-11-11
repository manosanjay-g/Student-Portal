<template>
  <div
    id="events-card"
    class="min-w-auto max-w-lg m-4 max-h-90 bg-neutral-900 rounded-lg text-center py-2"
  >
    <p class="px-2 py-2 text-2xl font-medium">{{ props.card_name }}</p>
    <hr />
    <div
      v-for="event in events"
      :key="event.event_name"
      class="m-4 flex flex-row rounded-md bg-neutral-800 items-center px-4 py-6"
    >
      <div class="flex flex-col basis-1/4">
        <p>{{ event.event_date }}</p>
        <p>{{ event.event_time }}</p>
      </div>
      <p class="basis-3/4 text-left">{{ event.event_name }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["card_name", "events"]);
</script>
