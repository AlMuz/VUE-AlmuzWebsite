import Vue from "vue";
import Vuex from "vuex";
import i18n from "./translations/i18n";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedLanguage: null,
    languages: [],
    layout: null,
    visitorName: "Anonym"
  },

  getters: {
    getLanguages(state) {
      return state.languages;
    },
    getSelectedLanguage(state) {
      return state.selectedLanguage;
    },
    getLayout(state) {
      return state.layout;
    },
    getVisitorName(state) {
      return state.visitorName;
    }
  },

  mutations: {
    setAppConfiguration(state, data) {
      state.selectedLanguage = data.selectedLanguage;
      state.languages = data.languages;
      state.layout = data.layout;
    },
    changeLanguage(state, language) {
      state.selectedLanguage = language;
    },
    setIntroSkip(state) {
      state.layout = "DefaultLayout";
    },
    setVisitorName(state, name) {
      state.visitorName = name;
    }
  },

  actions: {
    configureApp({ commit }) {
      var languages = Object.keys(i18n.messages);
      var selectedLanguage = i18n.locale;
      var layout = "DefaultLayout";
      var intro = localStorage.getItem("intro");

      if (!JSON.parse(intro)) {
        localStorage.setItem("intro", false);
        layout = "ConversationLayout";
      }

      commit("setAppConfiguration", {
        languages,
        selectedLanguage,
        layout
      });
    },
    skipIntro({ commit }) {
      localStorage.setItem("intro", true);
      commit("setIntroSkip");
    },
    changeLanguage({ commit }, language) {
      i18n.locale = language;
      localStorage.setItem("language", language);
      commit("changeLanguage", language);
    },
    changeVisitorName({ commit }, name) {
      commit("setVisitorName", name);
    }
  }
});
