<script>
export default {
    name: 'SelectElement',
}
</script>

<template>
    <!-- creazione template html -->
    <div class="container-70">
        <form>
            <label for="category"></label>
            <select name="category" id="category">
                <option value="#">Select category</option>
                <option value="#">#</option>
                <option value="#">#</option>
                <option value="#">#</option>
            </select>
        </form>
    </div>

</template>



<style scoped lang="scss">
/* aggiunta stile css */

.container-70 {
    width: 70%;
    margin: auto;
}
</style>