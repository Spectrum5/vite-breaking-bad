<script>
export default {
    props: {
        card: Object
    },
}
</script>
<template>
    <div class="card">
        <div class="card-img">
            <img :src="card.card_images[0].image_url" />
        </div>
        <div class="card-info">
            <h4>{{ card.name }}</h4>
            <p>{{ card.type }}</p>
        </div>
    </div>

</template>


<style lang="scss" scoped>
.card {
    width: calc(100% / 5 - 20px);
    margin: 10px;
    background-color: #ef482f;
    border-radius: 25px;
    .card-img {
        img {
            width: 100%;
        }
    }
    .card-info {
        color: white;
        padding: 20px 0 20px 5px;
        h4 {
            color: black;
            padding-bottom: 5px;
        }
    }
}
</style>