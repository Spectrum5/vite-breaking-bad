<script>
import AppSingleCard from './AppSingleCard.vue';
import { store } from '../store.js';
export default {
    components: {
        AppSingleCard
    },
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <div class="container mt-3">
        <div class="card-cont d-flex flex-wrap">
            <AppSingleCard v-for="(item, index) in store.cards" :key="index" :card="item" />

        </div>


    </div>

</template>

<style lang="scss" scoped>

</style>