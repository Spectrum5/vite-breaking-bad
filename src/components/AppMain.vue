<script>
import AppCardList from './AppCardList.vue';
import AppResultsMessage from './AppResultsMessage.vue';
export default {
    components: {
        AppCardList,
        AppResultsMessage,
    }
}
</script>

<template>
    <main class="w-100">

        <div class="container pt-3 bg-white">
            <AppResultsMessage />
            <AppCardList />

        </div>

    </main>

</template>


<style lang="scss" scoped >
main {
    background-color: #2e3a46;
}
</style>