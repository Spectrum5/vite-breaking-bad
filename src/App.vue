<script>
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import AppFooter from "./components/AppFooter.vue"

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },

  data() {
    return {
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@use "./styles/main.scss";

body {
  background-color: #2e3a46;
}
</style>