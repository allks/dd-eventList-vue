<template>
  <main class="maincontent">
    <div class="controls">
      <router-link to="/add" class="add-event">+ Добавить событие</router-link>
      <router-link to="/add" class="add-event">Сортировать по:</router-link>
    </div>
    <ul class="event-list">
      <EventItem
        v-for="event in events"
        :key="event.id"
        :event="event"
      />
    </ul>
  </main>
</template>

<script>
import EventItem from '@/components/EventItem.vue';
import EventService from '../EventService';

export default {
  data() {
    return {
      events: [],
    };
  },
  components: {
    EventItem,
  },
  created() {
    this.events = EventService.events;
  },
};

</script>

<style lang="scss">
  .maincontent{
    max-width: 1180px;
    margin: 60px auto 0;
  }
  .event-list{
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 0 40px;
  }
  .add-event{
    display: block;
    width: 295px;
    height: 50px;
    border-radius: 30px;
    background-color: #19D94F;
    color: #fff;
    line-height: 50px;
    font-size: 18px;
    cursor: pointer;
    transition-duration: .5s;
    text-decoration: none;
    &:hover{
      background-color: darken(#19D94F, 10%);
    }
  }
  .controls{
    display: flex;
    justify-content: space-between;
    margin: 40px;
  }

  @media screen and (max-width: 760px) {
    .maincontent{
      margin-top: 0;
    }
    .controls{
      flex-direction: column;
    }
    .add-event{
      width: 80%;
      margin: 10px auto;
    }
  }
</style>
