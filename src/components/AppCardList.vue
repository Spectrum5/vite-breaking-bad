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
    <div class="container">
        <div class="card-cont">
            <AppSingleCard v-for="(item, index) in store.cards" :key="index" :card="item" />

        </div>


    </div>

</template>

<style lang="scss" scoped>
main {
    background-color: white;
    margin-top: 3rem;
    .card-cont {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>