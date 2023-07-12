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

        <div v-for="(slide, i) in slides" :key="`Slide ${i}`" v-show="currentIndex === i" class="slide">
            <div class="description">
                <h1>{{ slide.title.row1 }} <br> {{ slide.title.row2 }} <span>{{
                    slide.title.bolder }}</span></h1>
                <p>{{ slide.description }}
                </p>
                <button>read more</button>
            </div>

            <div class="slide-img">
                <img :src="getImagePath(slide.img[0])" alt="slide img">
                <img v-if="slide.img[1]" :src="getImagePath(slide.img[1])" alt="slide img">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/style.scss' as *;
@use '../assets/scss/_colors.scss' as *;

#slider {
    position: relative;
}

.slide {
    @include flex(center, center, column);
    padding: 0 80px;
    user-select: none;
}

.slide-img {
    @include flex(center, center)
}

img {
    max-width: 340px;
    max-height: 250px;
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

    img {
        max-height: 375px;
        max-width: 590px;
        margin: 0;
    }
}

p {
    margin: 20px 0;
}

button {
    @include button($border-adorable, $white)
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
</style>
