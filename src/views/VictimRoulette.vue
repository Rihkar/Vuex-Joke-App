<template>
  <div class="victims-list" v-for="victim in currentVictims" :key="victim">
    {{ victim }}
  </div>
  <span class="next-victim">the next victim is {{ theVictim }}</span>
  <button class="btn-next-victim" @click="nextVictim">next</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations, mapState } from "vuex";

export default defineComponent({
  name: "VictimRoulette",
  methods: {
    ...mapMutations("victimRoulette", ["nextVictim"]),
  },
  computed: {
    ...mapState("victimRoulette", ["theVictim", "currentVictims"]),
  },
});
</script>
