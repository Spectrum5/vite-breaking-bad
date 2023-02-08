<script>
export default {
    props: {
        card: Object
    },
}
</script>
<template>
    <div class="card rounded-5 m-2">
        <div class="card-img">
            <img class="w-100" :src="card.card_images[0].image_url" />
        </div>
        <div class="card-info text-white">
            <h5 class="text-black pb-2">{{ card.name }}</h5>
            <p>{{ card.type }}</p>
        </div>
    </div>

</template>


<style lang="scss" scoped>
.card {
    width: calc(100% / 5 - 20px);
    background-color: red;

    .card-info {
        padding: 20px 0 20px 5px;
    }
}
</style>