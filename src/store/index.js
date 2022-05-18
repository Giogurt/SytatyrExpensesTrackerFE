import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    userId: ''
  },
  mutations: {
    saveToken(state, payload) {
      state.token = payload;
    },

    saveUserId(state, payload) {
      state.userId = payload;
    }
  },
  actions: {
    checkSessionStorage({commit}, payload) {
      commit("saveToken", payload.token);
      commit("saveUserId", payload.id);
    },
    async signIn(context, payload) {
      const url =
        "https://sytatyr-expense-tracker-be.herokuapp.com/user/login";

      try {
        var res = await axios.post(url, {
          username: payload.username,
          password: payload.password,
        }).then((res) => res.data);

        console.log(res);

        context.commit("saveToken", res.token.token);
        context.commit("saveUserId", res.id);
        sessionStorage.token = res.token.token;
        sessionStorage.id = res.id

      } catch (err) {
        console.log(err.message);
        throw new Error("Invalid credentials");
      }
    },
    signout(context){
      context.commit("saveToken", "");
      context.commit("saveUserId", "");   
     }
  },
  
  modules: {},
});
