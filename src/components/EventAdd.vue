<template>
  <div class="event-add">
    <form class="event-form">
      <router-link :to="{ name:'home' }" class="btn-back">Назад</router-link>
      <h2 class="event-add--title">Создание мероприятия</h2>
      <div class="event-form--title">
        <label
          for="title"
          class="event-form--label">Заголовок</label>
        <input
          type="text"
          class="event-form--input event-form--input__title"
          id="title"
          placeholder="Placeholder..."
          v-model="event.title">
      </div>
      <div class="event-form--description">
        <label
          for="description"
          class="event-form--label">Описание</label>
        <textarea
          class="event-form--input event-form--input__description"
          id="description"
          placeholder="Placeholder..."
          v-model="event.description">
        </textarea>
      </div>
      <div class="event-form--date">
        <label
          for="date"
          class="event-form--label">Дата</label>
        <input
          type="text"
          class="event-form--input event-form--input__date"
          id="date"
          placeholder="01.07.1970"
          v-model="event.data">
      </div>
      <button
        class="event-form--submit"
        @click.prevent="addEvent">Создать</button>
    </form>
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
  methods: {
    addEvent() {
      EventService.addEvent(this.event.title, this.event.description, this.event.data);
      this.$router.push('/');
    },
  },
};
</script>
<style lang="scss">
  .event-add{
    margin: 0 40px;
    &--title{
      text-align: left;
      font-size: 28px;
      font-weight: bold;
      margin: 15px 0 30px;
    }
  }
  .event-form{
    display: flex;
    flex-direction: column;
    max-width: 1180px;
    margin: auto;
    &--title,
    &--description,
    &--date{
      display: flex;
      flex-direction: column;
    }
    &--label{
      display: block;
      text-align: left;
      font-size: 24px;
      margin: 15px 0;
    }
    &--input{
      border: 1px solid #ccc;
      border-radius: 15px;
      &__title{
        height: 35px;
        padding: 0 15px;
      }
      &__description{
        display: block;
        height: 150px;
        padding: 15px;
        resize: none;
      }
      &__date{
        width: 70px;
        height: 35px;
        margin-right: auto;
        padding: 0 35px;
      }
    }
    &--submit{
      width: 295px;
      height: 50px;
      border: none;
      border-radius: 30px;
      background-color: #19D94F;
      color: #fff;
      font-size: 18px;
      margin: 40px auto;
      cursor: pointer;
      &:hover{
        background-color: darken(#19D94F, 10%);
      }
    }
  }
  .btn-back{
    display: flex;
    width: 100px;
    border: none;
    background-color: transparent;
    margin: 20px;
    margin-left: 0;
    line-height: 24px;
    color: #3d3d3d;
    cursor: pointer;
    &:before{
      content: '<';
      border: 1px solid #3d3d3d;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }
    &:hover{
      opacity: .5;
    }
  }
  @media screen and (max-width: 760px){
    .event-add{
    &--title{
      text-align: center;
    }
  }
  }
</style>
