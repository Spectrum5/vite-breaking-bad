<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <div class="cont rounded-pill">
        <h4 class="text-white p-3 text-center">
            Trovati {{ store.cards.length }} risultati
        </h4>
    </div>


</template>
<style lang="scss" scoped>
.cont {
    background-color: red;
}
</style>