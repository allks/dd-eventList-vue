<template>
  <div>
    <h1>{{ event.comments }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="sass">

</style>
