<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store.js';

export default {
  components: {
    AppHeader,
    AppMain,
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
    async getCards() {
      await axios.get(store.url).then((response) => {
        store.cards = response.data.data
        setTimeout(() => {
          store.loading = false
        }, 100)
      })
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss" >
@use "./styles/main.scss";

body {
  background-color: #2e3a46;
}
</style>