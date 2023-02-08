import { reactive } from 'vue';
export const store = reactive({
    url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien",
    cards: [],
    loading: true
})