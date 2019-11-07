<template>
  <div>
    <ul class="event-list">
      <EventItem
        v-for="event in events"
        :key="event.id"
        :event="event"
        :viewDetails="viewDetails"
      />
    </ul>
  </div>
</template>

<script>
import _ from 'lodash';
import EventItem from '@/components/EventItem.vue';

export default {
  props: ['events'],
  components: {
    EventItem,
  },
  methods: {
    viewDetails(id) {
      const eventToView = _.find(this.events, { id });
      this.$emit('viewDetails', eventToView);
    },
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
