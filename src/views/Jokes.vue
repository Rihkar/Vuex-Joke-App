<template>
  <div class="joke-btn-wrapper">
    <button @click="getProgrammingJokesAction('Programming')">
      programming jokes
    </button>
    <button @click="getProgrammingJokesAction('Miscellaneous')">
      misc jokes
    </button>
    <button @click="getProgrammingJokesAction('Dark')">dark jokes</button>
  </div>
  <br />
  <div class="joke-btn-wrapper">
    <button @click="getJokeFlagToBlacklist('nsfw')">nsfw</button>
    <button @click="getJokeFlagToBlacklist('religious')">religious</button>
    <button @click="getJokeFlagToBlacklist('political')">political</button>
    <button @click="getJokeFlagToBlacklist('racist')">racist</button>
    <button @click="getJokeFlagToBlacklist('sexist')">sexist</button>
    <button @click="getJokeFlagToBlacklist('explicit')">explicit</button>
  </div>

  <div v-for="joke in jokeApi" :key="joke">
    <div class="joke-wrapper">
      <span class="joke"> {{ joke.joke }}</span>
      <router-link to="/jokeInfo/">
        <button @click="getJokeInfoAction(joke.id)" class="btn-more-info">
          more info
        </button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "theJokes",

  methods: {
    ...mapActions("jokeApp", [
      "getProgrammingJokesAction",
      "getJokeInfoAction",
      "getJokeFlagToBlacklist",
    ]),
  },
  computed: {
    ...mapState("jokeApp", ["jokeApi", "jokeInfo"]),
  },
});
</script>
