<template>
  <div id="app">
dsffdsfdf
  <component v-bind:is="layout"></component>
  </div>
</template>

<script>
// import "@/scss/main.scss";
import SimpleLayout from "./layouts/Simple.vue";

export default {
  components: {
    SimpleLayout,
  },
};
</script>

<style lang="scss"></style>
