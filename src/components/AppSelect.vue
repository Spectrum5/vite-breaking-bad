<script>
import { store } from '../store.js'
export default {
    data() {
        return {
            store,
            archetypes: [
                'Alien',
                'Cipher',
                'Dark Magician',
                'Laval',
                'Performapal',
                'Vylon',
                'Elemental HERO',
            ],
            selectedArc: ''
        }
    }
}
</script>
<template lang="">
    <div class="bg-blue">
        <div class="select-container text-center p-3 w-75">
            <select v-model="store.selectedArc" @change="$emit('select')" name="arc" id="arc">
                <option v-for="(item, index) in archetypes" :key="item" :value="item">{{ item }}</option>
            </select>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.bg-blue {
    background-color: #2e3a46;
    .select-container {
        margin: 0 auto;
    }
}
</style>