<template>
  <main class="maincontent">
    <div class="controls">
      <router-link to="/add" class="add-event">+ Добавить событие</router-link>
      <router-link to="" class="sort-event">Сортировать по:</router-link>
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
    this.$http.get('http://5db050f78087400014d37dc5.mockapi.io/api/users/8/events/')
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
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
  .sort-event{
    width: 295px;
    height: 50px;
    border: 1px solid #3d3d3d;
    border-radius: 30px;
    line-height: 50px;
    font-size: 18px;
    color: #3d3d3d;
    text-decoration: none;
    transition-duration: .5s;
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
    .add-event,
    .sort-event{
      width: 80%;
      margin: 10px auto;
    }
  }
</style>
