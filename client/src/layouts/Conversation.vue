<template>
  <div id="chat">
    <ConversationHeader />
    <b-container class="mt-5">
      <transition-group name="slide">
        <b-row v-for="(value, index) in chat" :key="index" :class="value.person">
          <b-col md="12">
            <p v-if="value.text" v-html="value.text"></p>
            <p v-if="value.translation">{{ $t("conversation."+value.translation) }}</p>
            <b-button v-if="value.languages" v-for="language in value.languages" variant="danger" v-on:click="languageSelected(language)">{{language}}</b-button>
          </b-col>
        </b-row>
      </transition-group>
    </b-container>
  </div>
</template>

<script>
import ConversationHeader from '@/components/ConversationHeader';

export default {
  data() {
    return {
      preDefinedChat: [
        {person: "robot", text: "Hello"},
        {person: "robot", text: "What language do you prefer?"},
        {person: "information", text: "Languages to choose:"},
        {person: "person", languages: this.$store.getters.getLanguages},
        {person: "information", translation: "choosedLanguage"},
        {person: "robot", translation: "great"},
        {person: "robot", translation: "nameYourself"},
        {person: "person", translation: "choosedLanguage"},
      ],
      chat: [],
      selectedLanguage: null
    }
  },
  components: {
    ConversationHeader
  },
  methods: {
    languageSelected(language) {
      this.selectedLanguage = language;
      this.$store.dispatch('changeLanguage', language);
      setTimeout(() => {
        this.chat.pop();
        for (var i = 0; i < 3; i++) {
          this.setTimeoutFunction(i, this.preDefinedChat[i + 4]);
        }
      }, 1000);
    },
    setTimeoutFunction(key, value) {
      setTimeout(() => {
        this.chat.push(value)
      }, 1000 * key);
    }
  },
  created() {
    for (var i = 0; i < 4; i++) {
      this.setTimeoutFunction(i, this.preDefinedChat[i]);
    }
  }
}
</script>

<style lang="css" scoped>
  #chat .robot {
    text-align: right !important;
  }
  #chat .person {
    text-align: left !important;
  }
  #chat .information {
    text-align: center !important;
  }
  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }
  .slide-leave {
  }
  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
  }
  .slide-move {
    transition: transform 1s;
  }
  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }

</style>
