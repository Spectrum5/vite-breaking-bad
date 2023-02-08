<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppSingleCard from './components/AppSingleCard.vue';
import { store } from './store.js';
export default {
  components: {
    AppHeader,
    AppMain,
    AppSingleCard,
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
  <AppSingleCard />

</template>

<style lang="scss" >
@use "./styles/main.scss";

body {
  background-color: #2e3a46;
}
</style>