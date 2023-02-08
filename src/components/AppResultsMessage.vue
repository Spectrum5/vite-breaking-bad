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
    <div class="cont">
        <h4>Trovati {{ store.cards.length }} risultati</h4>
    </div>


</template>
<style lang="scss" scoped>
.cont {
    
    background-color: red;
    border-radius: 50px;
    h4 {
        color: white;
        padding: 20px;
        text-align: center;
    }
}
</style>