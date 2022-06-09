import { createStore } from "vuex";
import axios from "axios";
import victimsList from "@/data/VictimsList";

export default createStore({
  modules: {
    victimRoulette: {
      namespaced: true,
      state: {
        allVictims: victimsList,
        currentVictims: victimsList,
        theVictim: "...",
      },
      getters: {},
      mutations: {
        nextVictim(state) {
          const theNextVictim =
            state.currentVictims[
              Math.floor(Math.random() * state.currentVictims.length)
            ];
          state.theVictim = theNextVictim;
          if (state.currentVictims.length >= 1) {
            return (state.currentVictims = state.currentVictims.filter(
              (name: string) => name !== theNextVictim
            ));
          } else {
            state.theVictim = "...";
            return (state.currentVictims = state.allVictims);
          }
        },
      },
      actions: {},
    },

    jokeApp: {
      namespaced: true,
      state: {
        jokeApi: "",
        jokeInfo: "",
      },
      getters: {},
      mutations: {
        getDataMutation(state, { data }) {
          state.jokeApi = data.jokes;
        },
        getJokeInfoMutation(state, { data }) {
          state.jokeInfo = data;
        },
        getJokeFlagToBlacklistMutation(state, { data }) {
          state.jokeInfo = data;
        },
      },
      actions: {
        getProgrammingJokesAction: ({ commit }, payload) => {
          axios
            .get(`https://v2.jokeapi.dev/joke/${payload}?type=single&amount=10`)
            .then((response) => {
              commit("getDataMutation", response);
            });
        },
        getJokeInfoAction: ({ commit }, payload) => {
          axios
            .get(
              `https://v2.jokeapi.dev/joke/Any?type=single&idRange=${payload}`
            )
            .then((response) => {
              commit("getJokeInfoMutation", response);
            });
        },
        getJokeFlagToBlacklist: ({ commit }, payload) => {
          axios
            .get(
              `https://v2.jokeapi.dev/joke/Any?blacklistFlags=${payload}&type=single`
            )
            .then((response) => {
              commit("getJokeFlagToBlacklistMutation", response);
              console.log(response);
            });
        },
      },
    },
  },
});
