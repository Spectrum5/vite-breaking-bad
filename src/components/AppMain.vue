<script>
import AppCardList from './AppCardList.vue';
export default {
    components: {
        AppCardList
    }
}
</script>

<template>
    <!-- creazione template html -->
    <main>
        <div class="select">
            <select name="Alien" id="selettore">
                <option value="1">Alien</option>
                <option value="2">Alien</option>
                <option value="3">Alien</option>
            </select>
        </div>
        <div class="container">

            <AppCardList />

        </div>

    </main>

</template>


<style lang="scss" >
/* aggiunta stile css */
main {
    background-color: #d48f38;
    width: 100%;

    .select {
        width: 80%;
        margin: 0 auto;
        padding: 20px 0;
    }

    .container {
        padding-top: 30px;
        background-color: white;

        .select {
            padding: 20px;
            width: 200px;
        }
    }
}
</style>