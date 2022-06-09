<template>
  <span class="joke-wrapper">{{ jokeInfo.joke }}</span>
  <br />
  <div class="single-joke-info-wrapper">
    <span class="single-joke-info"> id:{{ jokeInfo.id }}</span>

    <span class="single-joke-info"> category: {{ jokeInfo.category }}</span>

    <span class="single-joke-info"> langueage:{{ jokeInfo.lang }}</span>
  </div>
  <div class="single-joke-info-wrapper">
    <span class="single-joke-info">nsfw:{{ jokeInfo.flags.nsfw }}</span>

    <span class="single-joke-info"> religious:{{ jokeInfo.flags.nsfw }}</span>

    <span class="single-joke-info">
      political:{{ jokeInfo.flags.political }}</span
    >

    <span class="single-joke-info"> racist:{{ jokeInfo.flags.racist }}</span>

    <span class="single-joke-info"> sexist:{{ jokeInfo.flags.sexist }}</span>

    <span class="single-joke-info">
      explicit:{{ jokeInfo.flags.explicit }}</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "theJokes",
  computed: {
    ...mapState("jokeApp", ["data", "jokeInfo"]),
  },
});
</script>
