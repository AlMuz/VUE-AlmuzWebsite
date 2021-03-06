<template>
  <div id="chat">
    <ConversationHeader />
    <b-container class="mt-5 chat-content">
      <transition-group name="slide">
        <b-row
          v-for="(value, index) in chat"
          :key="index"
          :class="value.person"
        >
          <b-col md="4">
            <div class="bubble">
              <p v-html="renderText(value)"></p>
              <div v-if="value.languages">
                <b-button
                  v-for="(language, index) in value.languages"
                  :key="index"
                  v-on:click="languageSelected(language)"
                  class="mx-4"
                  >{{ language | capitalize }}</b-button
                >
              </div>
              <b-input
                v-if="value.input && value.input == 'name'"
                id="inline-form-input"
                :placeholder="$t('conversation.name')"
                v-model="nameInput"
                v-on:keyup.enter="submitNameInput"
                :disabled="isDisabled"
              ></b-input>
              <div v-if="value.smiles">
                <b-button
                  v-for="(smile, index) in value.smiles"
                  :key="index"
                  v-on:click="smileSelected"
                  class="mx-4"
                  v-html="smile"
                ></b-button>
              </div>
            </div>
          </b-col>
        </b-row>
      </transition-group>
    </b-container>
    <notifications group="notify" position="bottom center" />
  </div>
</template>

<script>
import ConversationHeader from "@/components/ConversationHeader";

export default {
  data() {
    return {
      nameInput: "",
      nameInputFilled: false,
      preDefinedChat: [
        { step: 1, person: "robot", text: "Hello" },
        { step: 1, person: "robot", text: "What language do you prefer?" },
        { step: 1, person: "information", text: "Languages to choose" },
        {
          step: 1,
          person: "information",
          languages: this.$store.getters.getLanguages
        },
        { step: 2, person: "information", translation: "choosedLanguage" },
        { step: 2, person: "robot", translation: "great" },
        { step: 2, person: "robot", translation: "nameYourself" },
        { step: 2, person: "person", input: "name" },
        {
          step: 3,
          person: "robot",
          translation: "niceToMeetYou",
          additionalTranslation: true,
          additionalTranslationData: "nameInput"
        },
        { step: 3, person: "robot", text: "&#128075;" },
        {
          step: 3,
          person: "person",
          smiles: ["&#128075;", "&#128074;", "&#128077;"]
        }
      ],
      chat: [],
      selectedLanguage: null
    };
  },
  components: {
    ConversationHeader
  },
  metaInfo() {
    return {
      title: this.$t("meta.conversationPage")
    };
  },
  methods: {
    languageSelected(language) {
      this.selectedLanguage = language;
      this.$store.dispatch("changeLanguage", language);

      this.chat.pop();

      setTimeout(() => {
        this.renderStep(2);
      }, 1000);
    },

    setTimeoutFunction(key, value) {
      var that = this;
      setTimeout(() => {
        new Promise(function(resolve) {
          that.chat.push(value);
          resolve(1);
        }).then(() => {
          window.scrollTo(0, document.body.scrollHeight);
        });
      }, 1000 * key);
    },
    renderText(value) {
      if (value.text) {
        return value.text;
      } else if (value.additionalTranslationData && value.translation) {
        return this.$t(`conversation.${value.translation}`, {
          name: this[value.additionalTranslationData]
        });
      } else if (value.translation) {
        return this.$t(`conversation.${value.translation}`);
      }
    },
    renderStep(step) {
      const stepsData = this.preDefinedChat.filter(value => value.step == step);

      // "this" in function below cant be reached
      var that = this;
      stepsData.forEach(function(item, i) {
        that.setTimeoutFunction(i, item);
      });
    },
    smileSelected() {
      setTimeout(() => {
        this.$store.dispatch("skipIntro");
      }, 1000);
    },
    submitNameInput() {
      if (this.nameInput.length == 0) {
        this.$notify({
          group: "notify",
          type: "error",
          title: this.$t("conversation.emptyInput"),
          text: this.$t("conversation.pleaseFillInput")
        });
        return;
      }
      this.$store.dispatch("changeVisitorName", this.nameInput);
      this.nameInputFilled = true;

      setTimeout(() => {
        this.renderStep(3);
      }, 1000);
    }
  },
  computed: {
    isDisabled() {
      return this.nameInputFilled;
    }
  },
  created() {
    this.renderStep(1);
  }
};
</script>

<style lang="css" scoped>
#chat .robot {
  justify-content: flex-end !important;
  text-align: right !important;
}

#chat .information {
  justify-content: center!important;
  text-align: center !important;
}

#chat .bubble {
  border-radius: .4em;
  padding: 20px;
  margin-bottom: 10px;
}

#chat .bubble:after {
  content: '';
	position: absolute;
  top: 50%;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  margin-top: -20px;
}

#chat .bubble > * {
  margin: 0;
}

#chat .robot .bubble {
  background: #272643;
  color: #FFF;
}

#chat .robot .bubble:after {
	right: 0;
	border-left-color: #272643;
	border-right: 0;
}

#chat .person .bubble {
  color: #272643;
  background: #FFF;
}

#chat .person .bubble:after {
	left: 0;
	border-right-color: #FFF;
	border-left: 0;
}

#chat .information .bubble .btn {
  background-color: #D4D4D9!important;
  color: #272643!important;
  border: none!important;
}
</style>
