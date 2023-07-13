<script>
export default {
    props: {
        className: String,
        section: String,
        title: String,
        subtitle: String,
        text: String,
        icon: Object,
        blogImg: String
    }
}
</script>

<template>
    <div :class="className || 'card'">
        <!-- Gallery -->
        <div v-if="section === 'gallery'">
            <a href="#" class="illustration">
                <div>
                    <h4>{{ title }}</h4>
                    <div>{{ subtitle }}</div>
                </div>
            </a>
            <slot name="gallery"></slot>
        </div>


        <!-- Process Cards -->
        <div v-if="section === 'process-cards'">
            <div class="card-img"><font-awesome-icon :icon="['fas', icon.img]" :style="{ color: icon.color }" /></div>
            <div class="description">
                <div class="card-title">
                    <h5 class="pY-2">{{ title }}</h5>
                </div>
                <p>{{ text }}</p>
            </div>
        </div>

        <!-- Blog List -->
        <div v-if="section === 'blog-list'">
            <div class="blog-img">
                <img :src="blogImg">
            </div>
            <div class="blog-description">
                <h3 class="pY-2"><a href="#">{{ title }}</a></h3>
                <div class="txt-playfair-display">{{ text }}</div>
            </div>
            <slot></slot>
        </div>

        <!-- Slot del footer -->
        <slot name="footer"></slot>
    </div>
</template>




<style lang="scss" scoped>
@use '@/assets/scss/_colors.scss' as *;
@use '@/assets/scss/style.scss' as *;

// Sezinoe Gallery
.illustration {
    @include flex(center, center);
    background-color: white;
    padding: 30px 0;
    width: 80%;
    position: absolute;
    top: 50%;
    left: -100%;
    translate: 0 -50%;
    transition: left .5s,
        color 2s ease-out;

    >div {
        max-width: 85%;
        text-align: start;
        translate: -100% 0;
        transition: translate .5s .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);

        div {
            @include font($family: $playfair-display, $color: $black);
            margin-top: 10px;
        }
    }
}

.gallery.card:hover .illustration {
    left: 0;

    >div {
        translate: 0 0;
    }
}

// Sezione Process card
.process.card>div {
    @include flex(center, center, column)
}

.process .card-img {
    @include rounded(162px, $bg-milk-glass);
    @include flex(center, center);
    font-size: 50px;
}

// Sezione Blog card
.blog-img {
    overflow: hidden;

    img {
        transition: scale 1s;
    }
}

.blog-img:hover img {
    scale: 1.1;
}

.blog-description a {
    @include text_underscore($bg-teal-treat, 10px);
}

//________________________________________________ Logica Card Responsive
@media screen and (min-width: 700px) {
    .card {
        width: calc(100% / 2);

        &.small:not(footer .card) {
            width: calc(100%);
        }
    }
}

@media screen and (min-width: 768px) {
    .card {
        width: calc(100% / 3);

        &.small {
            width: calc(100% / 2);
        }
    }
}

@media screen and (min-width: 992px) {

    .card.small,
    .card.small:not(footer .card) {
        width: calc(100% / 4);
    }
}
</style>
