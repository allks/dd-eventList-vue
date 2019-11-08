<template>
  <li class="event-list--item" @click="viewDetailsEvent">
    <div class="event-list--title">{{ event.title }}</div>
    <div class="event-list--description"><p>{{ event.description }}</p></div>
    <div class="event-list--counters">
      <div class="event-list--date">Дата публикации: {{ event.dete }}</div>
      <div class="event-list--comments">Комментарии: {{ event.comments.length }}</div>
    </div>
    <div class="event-list--remove">Удалить</div>
  </li>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
    viewDetails: Function,
  },
  methods: {
    viewDetailsEvent() {
      this.viewDetails(this.event.id);
    },
  },
};
</script>

<style lang="scss">
  .event-list {
    &--item {
      display: flex;
      flex-direction: column;
      position: relative;
      margin-bottom: 40px;
      width: 100%;
      min-height: 212px;
      border-radius: 10px;
      box-shadow: 0px 0px 5px 1px rgba(61,61,61, .2);
    }
    &--title,
    &--description{
      text-align: left;
      margin: 20px;
    }
    &--title{
      font-size: 24px;
      font-weight: bold;
    }
    &--counters{
      display: flex;
      margin: auto 20px 20px;
    }
    &--date{
      color: #ccc;
    }
    &--comments{
      margin-left: auto;
      color: #ccc;
    }
    &--remove{
      position: absolute;
      top: 0;
      right: 0;
      font-size: 12px;
      margin: 20px;
      color: #FF2F2F;
    }
  }

  @media screen and (max-width: 760px) {
    .event-list{
      &--title{
        font-size: 18px;
      }
      &--counters{
        display: flex;
        flex-direction: column;
        text-align: left;
      }
      &--comments{
        margin: 5px 0 0 0;
      }
      &--remove{
        position: static;
        margin-top: 0;
      }
    }
  }
</style>
