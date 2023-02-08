<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Apploader from './components/AppLoader.vue';
import { store } from './store.js';

export default {
  components: {
    AppHeader,
    AppMain,
    Apploader,
  },
  data() {
    return {
      store
    }
  },
  created() {
    this.getCards();
  },
  methods: {
    getCards() {
      axios.get(store.url).then((response) => {
        store.cards = response.data.data
        setTimeout(() => {
          store.loading = true
        }, 3000)
      })
    }
  }
}
</script>

<template>
  <AppHeader />
  <div v-if="store.loading">
    <AppMain />
  </div>
  <div v-else>
    <Apploader />
  </div>
</template>

<style lang="scss" >
@use "./styles/main.scss";

body {
  background-color: #2e3a46;
}
</style>