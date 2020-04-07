<template>
  <div>
    <b-row v-for="(value, index) in chat" :key="index" :class="value.person">
      <b-col md="4">
        <div class="bubble">
          <p v-html="renderText(value)" />
          <div v-if="value.languages">
            <b-button
              v-for="(language, index) in value.languages"
              :key="index"
              class="mx-4"
              @click="languageSelected(language)"
            >
              {{ language | capitalize }}
            </b-button>
          </div>
          <b-input
            v-if="value.input && value.input == 'name'"
            id="inline-form-input"
            v-model="nameInput"
            :placeholder="$t('conversation.name')"
            :disabled="isDisabled"
            @keyup.enter="submitNameInput"
          />
          <div v-if="value.smiles">
            <b-button
              v-for="(smile, index) in value.smiles"
              :key="index"
              class="mx-4"
              @click="smileSelected"
              v-html="smile"
            />
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  layout: 'conversation',
  data() {
    return {
      nameInput: '',
      nameInputFilled: false,
      preDefinedChat: [
        { step: 1, person: 'robot', text: 'Hello' },
        { step: 1, person: 'robot', text: 'What language do you prefer?' },
        { step: 1, person: 'information', text: 'Languages to choose' },
        {
          step: 1,
          person: 'information',
          languages: this.$i18n.locales.map((locale) => locale.code)
        },
        { step: 2, person: 'information', translation: 'choosedLanguage' },
        { step: 2, person: 'robot', translation: 'great' },
        { step: 2, person: 'robot', translation: 'nameYourself' },
        { step: 2, person: 'person', input: 'name' },
        {
          step: 3,
          person: 'robot',
          translation: 'niceToMeetYou',
          additionalTranslation: true,
          additionalTranslationData: 'nameInput'
        },
        { step: 3, person: 'robot', text: '&#128075;' },
        {
          step: 3,
          person: 'person',
          smiles: ['&#128075;', '&#128074;', '&#128077;']
        }
      ],
      chat: []
    }
  },
  computed: {
    isDisabled() {
      return this.nameInputFilled
    }
  },
  created() {
    this.renderStep(1)
  },
  methods: {
    languageSelected(language) {
      this.$i18n.setLocale(language)

      this.switchLocalePath(language)

      this.chat.pop()

      setTimeout(() => {
        this.renderStep(2)
      }, 1000)
    },

    setTimeoutFunction(key, value) {
      var that = this
      setTimeout(() => {
        new Promise(function (resolve) {
          that.chat.push(value)
          resolve(1)
        }).then(() => {
          window.scrollTo(0, document.body.scrollHeight)
        })
      }, 1000 * key)
    },
    renderText(value) {
      if (value.text) {
        return value.text
      } else if (value.additionalTranslationData && value.translation) {
        return this.$t(`conversation.${value.translation}`, {
          name: this[value.additionalTranslationData]
        })
      } else if (value.translation) {
        return this.$t(`conversation.${value.translation}`)
      }
    },
    renderStep(step) {
      const stepsData = this.preDefinedChat.filter(
        (value) => value.step == step
      )

      // "this" in function below cant be reached
      var that = this
      stepsData.forEach(function (item, i) {
        that.setTimeoutFunction(i, item)
      })
    },
    smileSelected() {
      setTimeout(() => {
        this.$cookiz.set('intro', true)
        this.$router.push('/')
      }, 1000)
    },
    submitNameInput() {
      if (this.nameInput.length == 0) {
        this.$notify({
          group: 'notify',
          type: 'error',
          title: this.$t('conversation.emptyInput'),
          text: this.$t('conversation.pleaseFillInput')
        })
        return
      }

      this.$cookiz.set('name', this.nameInput)
      this.nameInputFilled = true

      setTimeout(() => {
        this.renderStep(3)
      }, 1000)
    }
  }
}
</script>

<style lang="css" scoped></style>
