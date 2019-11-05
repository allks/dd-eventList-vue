<template>
  <div id="app">
    <Header />
    <div class="controls">
      <AddEvent />
      <SortEvent />
    </div>
    <EventList v-bind:events="events"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import AddEvent from '@/components/AddEvent.vue';
import SortEvent from '@/components/SortEvent.vue';
import EventList from '@/components/EventList.vue';

export default {
  name: 'app',
  data() {
    return {
      events: [],
    };
  },
  created() {
    this.$http.get('http://5db050f78087400014d37dc5.mockapi.io/api/users/8/events')
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  components: {
    EventList, Header, AddEvent, SortEvent,
  },
};
</script>

<style lang="scss">
  @import 'src/assets/reset.scss';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 14px;
  }
  .controls{
    display: flex;
    margin: 30px 150px;
  }
</style>
