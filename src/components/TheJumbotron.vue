<script>
</script>

<template>
    <div class="jumbotron">
        <h2>Want to work with us? Send us <span class="txt-playfair-display">a message!</span></h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde animi illo corporis omnis, adipisci laudantium
            facilis! Voluptate id nesciunt, laboriosam eius assumenda impedit voluptas accusantium incidunt quos aliquam
            reprehenderit ea!</p>
        <button>contact</button>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/style.scss' as *;
@use '../assets/scss/_colors.scss' as *;

.jumbotron {
    text-align: center;
}

button {
    @include button($bg-teal-treat, $bg-teal-treat)
}
</style>
