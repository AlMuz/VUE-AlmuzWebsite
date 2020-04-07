<template>
  <div id="chat">
    <ConversationHeader />
    <b-container class="mt-5 chat-content">
      <nuxt />
    </b-container>
    <notifications group="notify" position="bottom center" />
  </div>
</template>

<script>
import ConversationHeader from '@/components/ConversationHeader'

export default {
  middleware({ app: { $cookiz }, redirect }) {
    if ($cookiz.get('intro')) {
      return redirect('/')
    }
  },
  components: {
    ConversationHeader
  },
  head() {
    return {
      titleTemplate: `${this.$t('meta.conversationPage')} - ${this.$t(
        'meta.titleTemplate'
      )}`
    }
  }
}
</script>

<style lang="css">
#chat .robot {
  justify-content: flex-end !important;
  text-align: right !important;
}

#chat .information {
  justify-content: center !important;
  text-align: center !important;
}

#chat .bubble {
  border-radius: 0.4em;
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
  color: #fff;
}

#chat .robot .bubble:after {
  right: 0;
  border-left-color: #272643;
  border-right: 0;
}

#chat .person .bubble {
  color: #272643;
  background: #fff;
}

#chat .person .bubble:after {
  left: 0;
  border-right-color: #fff;
  border-left: 0;
}

#chat .information .bubble .btn {
  background-color: #d4d4d9 !important;
  color: #272643 !important;
  border: none !important;
}
</style>
