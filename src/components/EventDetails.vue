<template>
  <div class="wrap-details">
    <div class="event-details">
      <router-link :to="{ name:'home' }" class="btn-back">Назад</router-link>
      <div class="event-list--item">
        <div class="event-list--title">{{ event.title }}</div>
        <div class="event-list--description"><p>{{ event.description }}</p></div>
        <div class="event-list--counters">
          <div class="event-list--date">Дата публикации: {{ event.dete | moment }}</div>
        </div>
      </div>
      <div class="comment"> {{ event.comments }}</div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      event: {},
    };
  },
  filters: {
    moment(dete) {
      return moment(dete).format('DD.MM.YYYY');
    },
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

<style lang="scss">
  .wrap-details {
    max-width: 1180px;
    margin: 60px auto 0;
  }
</style>
