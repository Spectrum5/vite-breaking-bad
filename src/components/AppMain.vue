<script>
import SelectElement from './another-comp/SelectElement.vue';
import ListCard from './another-comp/ListCard.vue';
export default {
    name: 'AppMain',
    components: {
        SelectElement,
        ListCard,
    }
}

</script>

<template>
    <!-- creazione template html -->
    <section class="first-section-main">
        <SelectElement />
    </section>
    <section class="second-section-main">
        <ListCard />
    </section>

</template>

<style scoped lang="scss">
/* aggiunta stile css */
</style>