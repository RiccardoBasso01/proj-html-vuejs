<script></script>

<template>
    <div class="slider">

        <div class="description">
            <h1>Our new folio <br>full of <span class="txt-playfair-display bold">joy</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quam nemo odit fugiat officia debitis
                beatae
            </p>
            <button>read more</button>
        </div>

        <div class="image">
            <img src="../assets/img/h-2-slider-img-11.png" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/style.scss' as *;
@use '../assets/scss/_colors.scss' as *;

.slider {
    @include flex(center, center, column);
    padding: 0 40px;
}

img {
    max-width: 340px;
}

@media screen and (min-width: 992px) {
    .slider {
        @include flex(center, center);

        >div {
            flex: 0 0 50%;
        }
    }

    img {
        max-width: 590px;
    }
}

p {
    color: $txt-dove-grey;
    margin: 20px 0;
}

button {
    @include button($border-adorable, $white)
}
</style>
