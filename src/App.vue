<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Apploader from './components/AppLoader.vue';
import AppSelect from './components/AppSelect.vue';

import { store } from './store.js';

export default {
  components: {
    AppHeader,
    AppMain,
    Apploader,
    AppSelect
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
      let myUrl = `${store.url}${store.selectedArc}`;
      axios.get(myUrl).then((response) => {
        store.cards = response.data.data
        setTimeout(() => {
          store.loading = true
        }, 3000)
      })
    }
  }
}
</script>

<template lang="">

  <AppHeader />
  
  <div v-if="store.loading" >

    <AppSelect @change="getCards" />

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