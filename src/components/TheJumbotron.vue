<script>
</script>

<template>
    <section class="jumbotron">
        <div class="container-m">
            <h2>Want to work with us? Send us <span>a message!</span></h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde animi illo corporis omnis, adipisci laudantium
                facilis! Voluptate id nesciunt, laboriosam eius assumenda impedit voluptas accusantium incidunt quos aliquam
                reprehenderit ea!</p>
            <button>contact</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/style.scss' as *;
@use '@/assets/scss/_colors.scss' as *;

.jumbotron {
    background-image: url(@/assets/img/h-2-background-1.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
    padding: 115px 4%;
}


h2 {
    text-align: center;
}

p {
    @include font(l);
    margin: 20px 0 40px 0;
}

button {
    @include button($bg-teal-treat, $color-hover: $bg-adorable)
}
</style>
