<template>
  <li class="event-list--item">
    <div class="event-list--title">{{ event.title }}</div>
    <div class="event-list--description"><p>{{ event.description }}</p></div>
    <div class="event-list--counters">
      <div class="event-list--date">Дата публикации: {{ event.data }}</div>
      <!-- <div class="event-list--comments">Комментарии: {{ event.comments.length || 0 }}</div> -->
    </div>
    <div class="event-list--btns">
      <div class="event-list--view-details"
        @click="viewDetailsEvent">Подробнее</div>
      <div class="event-list--remove">Удалить</div>
    </div>
  </li>
</template>

<script>
// import EventService from '../EventService';

export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  methods: {
    viewDetailsEvent() {
      this.$router.push({ name: 'details', params: { id: this.event.id } });
    },
  },
};
</script>

<style lang="scss">
  .event-list {
    &--item {
      display: flex;
      flex-direction: column;
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
    &--btns{
      display: flex;
      justify-content: space-around;
    }
    &--view-details,
    &--remove{
      width: 150px;
      height: 35px;
      line-height: 35px;
      color: #fff;
      border-radius: 30px;
      margin-bottom: 20px;
      cursor: pointer;
    }
    &--view-details{
      background-color: #4A76A8;
      &:hover{
        background-color: darken(#4A76A8, 20%);
      }
    }
    &--remove{
      background-color: #FF2F2F;
      &:hover{
        background-color: darken(#FF2F2F, 20%);
      }
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
