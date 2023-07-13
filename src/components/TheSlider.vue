<script>
export default {
    data() {
        return {
            currentIndex: 0,

            slides: [
                {
                    img: [`h-2-slider-img-11.png`],
                    title: {
                        row1: 'Our new folio ',
                        row2: 'full of ',
                        bolder: 'joy',
                    },
                    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit cumque laboriosam ipsum ratione ut consequuntur architecto, assumenda laudantium alias corrupt ',
                },
                {
                    img: [`h-2-slider-img-15.png`, `h-2-slider-img-16.png`],
                    title: {
                        row1: 'Devotion that ',
                        row2: 'never ',
                        bolder: 'ends',
                    },
                    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit cumque laboriosam ipsum ratione ut consequuntur architecto, assumenda laudantium alias corrupt ',
                },
                {
                    img: [`short-slider-rev-1-img-3.png`],
                    title: {
                        row1: 'Projet made ',
                        row2: 'with ',
                        bolder: 'love',
                    },
                    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit cumque laboriosam ipsum ratione ut consequuntur architecto, assumenda laudantium alias corrupt ',
                }
            ]
        }
    },
    methods: {
        getImagePath(imgName) {
            const url = new URL(`../assets/img/${imgName}`, import.meta.url)
            return url.href
        },
        goAhead() {
            this.currentIndex++;
            if (this.currentIndex === this.slides.length) this.currentIndex = 0;
        },
        goBack() {
            this.currentIndex--;
            if (this.currentIndex < 0) this.currentIndex = this.slides.length - 1;
        }
    }
}
</script>

<template>
    <section id="slider">
        <!-- Frecce incremento e decremento -->
        <div id="arrow-left" @click="goBack"><font-awesome-icon :icon="['fas', 'chevron-left']" /></div>
        <a href="#" id="arrow-right" @click="goAhead"><font-awesome-icon :icon="['fas', 'chevron-right']" /></a>

        <!-- Slide -->
        <div v-for="(slide, i) in slides" :key="`Slide ${i}`" v-show="currentIndex === i" class="slide">
            <!-- testo -->
            <div class="description">
                <h1>{{ slide.title.row1 }} <br> {{ slide.title.row2 }} <span>{{
                    slide.title.bolder }}</span></h1>
                <p>{{ slide.description }}
                </p>
                <button>read more</button>
            </div>
            <!-- Immagini -->
            <div :class="`slide-img-${i + 1}`">
                <img :src="getImagePath(slide.img[0])" alt="slide img">
                <img v-if="slide.img[1]" :src="getImagePath(slide.img[1])" alt="slide img">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/style.scss' as *;
@use '@/assets/scss/_colors.scss' as *;

#slider {
    position: relative;
}

.slide {
    @include flex(center, center, column);
    padding: 0 80px;
    user-select: none;
}

//_________________________________________________ Immagine/i principali 
img {
    width: 340px;
    height: 250px;
    margin-top: 20px;
    object-fit: contain;
}

@media screen and (min-width: 992px) {
    .slide {
        @include flex(center, center);

        >div {
            flex: 0 0 50%;
        }
    }

    div[class^="slide-img"] {
        max-width: 100%;

        img {
            margin: 0;
            max-width: 100%;
            max-height: 300px;
            object-fit: contain;
        }
    }
}

p {
    margin: 20px 0;
}

button {
    @include button($border-color: $border-adorable, $color-hover: $bg-adorable)
}

@mixin arrow($direction) {
    position: absolute;
    top: 50%;
    font-size: 20px;
    translate: 0 -50%;

    @if $direction =='left' {
        left: 20px;
    }

    @else if $direction =='right' {
        right: 20px;
    }
}

//_________________________________________________ Frecce incremento e decremento 
#arrow-left,
#arrow-right {
    @include rounded(35px, $bg-adorable);
    @include flex(center, center);
    color: white
}

#arrow-left {
    @include arrow(left);
}

#arrow-right {
    @include arrow(right)
}

//_________________________________________________ Immagini di background
@mixin bgc_images($urls, $positions, $sizes) {
    background-image: $urls;
    background-position: $positions;
    background-size: $sizes;
}

$urls_1: url(@/assets/img/short-slider-rev-1-img-2.png),
    url(@/assets/img/short-slider-rev-1-img-6.png),
    url(@/assets/img/h-2-slider-img-13.png),
    url(@/assets/img/h-2-slider-img-12.png),
    url(@/assets/img/h-2-slider-img-14.png);
$positions_1: 0 30%,
    90% 40px,
    15% 100%,
    0 90%,
    100% 100%;
$sizes_1: 40px,
    40px,
    45px,
    40px,
    50px;

$urls_2: url(@/assets/img/short-slider-rev-1-img-2.png),
    url(@/assets/img/short-slider-rev-1-img-6.png),
    url(@/assets/img/h-2-slider-img-13.png),
    url(@/assets/img/h-2-slider-img-12.png),
    url(@/assets/img/h-2-slider-img-14.png),
    url(@/assets/img/h-2-slider-img-17.png);
$positions_2: 0 5%,
    90% 25%,
    8% 100%,
    0 70%,
    90% 0,
    100% 100%;
$sizes_2: 35px,
    35px,
    40px,
    35px,
    35px,
    50px;

$urls_3: url(@/assets/img/short-slider-rev-1-img-2.png),
    url(@/assets/img/short-slider-rev-1-img-6.png),
    url(@/assets/img/short-slider-rev-1-img-1.png),
    url(@/assets/img/short-slider-rev-1-img-7.png),
    url(@/assets/img/short-slider-rev-1-img-8.png),
    url(@/assets/img/short-slider-rev-1-img-9.png),
    url(@/assets/img/short-slider-rev-1-img-10.png),
    url(@/assets/img/short-slider-rev-1-img-4.png),
    url(@/assets/img/short-slider-rev-1-img-5.png);
$positions_3: 0 30%,
    80% 40%,
    0 100%,
    20% 90%,
    80% 90%,
    95% 100%,
    100% 100%,
    92% 20%,
    100% 20%;
$sizes_3: 40px,
    35px,
    100px,
    30px,
    40px,
    60px,
    30px,
    80px,
    80px;

.slide-img-1 {
    @include bgc_images($urls_1, $positions_1, $sizes_1);
}

.slide-img-2 {
    @include bgc_images($urls_2, $positions_2, $sizes_2);
}

.slide-img-3 {
    @include bgc_images($urls_3, $positions_3, $sizes_3);
}


div[class^="slide-img"] {
    @include flex(center, center);
    background-repeat: no-repeat;
    width: 100%;
}
</style>
