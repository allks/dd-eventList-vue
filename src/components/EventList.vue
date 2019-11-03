<template>
  <div>
    <ul class="event-list">
      <EventItem
        v-for="event in events"
        :key="event.id"
        v-bind:event="event"
      />
    </ul>
  </div>
</template>

<script>
import EventItem from '@/components/EventItem.vue';

export default {
  props: ['events'],
  components: {
    EventItem,
  },
};
</script>

<style lang="scss">
  .event-list{
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 60px 150px 0;
    padding: 0;
  }
</style>
