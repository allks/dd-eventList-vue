<template>
  <div>
    <h1>{{ event.id }}</h1>
    <h2>{{ event.comments }}</h2>
  </div>
</template>

<script>
// import EventService from '../EventService';

export default {
  data() {
    return {
      event: {},
    };
  },
  mounted() {
    this.loadEvent(this.$route.params.id);
  },
  methods: {
    loadEvent(id) {
      this.$http.get(`http://5db050f78087400014d37dc5.mockapi.io/api/users/8/events/${id}`)
        .then((response) => {
          this.event = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="sass">

</style>
