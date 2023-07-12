<script>
</script>

<template>
    <div class="jumbotron">
        <div class="container-m">
            <h2>Want to work with us? Send us <span class="txt-playfair-display bold">a message!</span></h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde animi illo corporis omnis, adipisci laudantium
                facilis! Voluptate id nesciunt, laboriosam eius assumenda impedit voluptas accusantium incidunt quos aliquam
                reprehenderit ea!</p>
            <button class="text-uppercase">contact</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/style.scss' as *;
@use '../assets/scss/_colors.scss' as *;

.jumbotron {
    text-align: center;
}


h2 {
    text-align: center;
    padding: 120px 0 90px 0;
}

button {
    @include button($bg-teal-treat, $bg-teal-treat)
}
</style>
