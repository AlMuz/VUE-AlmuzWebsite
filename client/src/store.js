import Vue from 'vue';
import Vuex from 'vuex';
import i18n from "./translations/i18n";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedLanguage: null,
    languages: []
  },

  getters: {
    getLanguages(state) {
      return state.languages;
    },
    getSelectedLanguage(state) {
      return state.selectedLanguage;
    }
  },

  mutations: {
    setLanguages(state, data) {
      state.selectedLanguage = data.selectedLanguage;
      state.languages = data.languages;
    },
    changeLanguage(state, language) {
      state.selectedLanguage = language;
    }
  },

  actions: {
    setLanguages({ commit }) {
      var languages = Object.keys(i18n.messages);
      var selectedLanguage = i18n.locale;
      commit('setLanguages', {
        languages,
        selectedLanguage
      });
    },
    changeLanguage({ commit }, language) {
      i18n.locale = language;
      localStorage.setItem('language', language);
      commit('changeLanguage', language);
    }
  },
});
