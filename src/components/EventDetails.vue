<template>
  <div>
    <h1>{{ event.id }}</h1>
    <h2>{{ event.comments }}</h2>
  </div>
</template>

<script>
import EventService from '../EventService';

export default {
  data() {
    return {
      event: {},
    };
  },
  created() {
    EventService.$on('viewDetails', (selectedEvent) => {
      this.event = selectedEvent;
    });
  },
  mounted() {
    EventService.viewDetails(this.$route.params.id);
  },
};
</script>

<style lang="sass">

</style>
