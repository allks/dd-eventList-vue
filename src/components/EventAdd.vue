<template>
  <div>
    <form>
      <div class="title">
      <label for="title">Заголовок</label>
      <input type="text" id="title" placeholder="placeholder">
    </div>
    <div class="desctiption">
      <label for="description">Описание</label>
      <input type="text" id="description" placeholder="placeholder">
    </div>
    <div class="date">
      <label for="date"></label>
      <input type="text" id="date">
    </div>
    <button type="submit" @click.prevent="addEvent">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    addEvent() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss">
</style>
