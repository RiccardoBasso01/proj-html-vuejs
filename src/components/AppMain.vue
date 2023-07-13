<script>
import TheSlider from './TheSlider.vue';
import BaseCard from './BaseCard.vue';
import TheJumbotron from './TheJumbotron.vue';
import BaseSidePopUp from './BaseSidePopUp.vue';

export default {
    data() {
        return {
            galleryCards: [
                {
                    title: 'All these illustrations',
                    subtitle: 'illustration'
                },
                {
                    title: 'Type and illustration',
                    subtitle: 'illustration'
                },
                {
                    title: 'Draw and illustrate',
                    subtitle: 'illustration'
                },
                {
                    title: 'Illustration of novels',
                    subtitle: 'illustration'
                },
                {
                    title: 'Too many illustrations',
                    subtitle: 'illustration'
                },
                {
                    title: 'Dreams are illustrations',
                    subtitle: 'illustration'
                }
            ],
            processCards: [
                {
                    title: 'First theres an idea',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, saepe nam? Amet dolor mollitia.',
                    icon: {
                        img: 'lightbulb',
                        color: '#badac9' // $txt-misty-jade
                    }
                },
                {
                    title: 'Then we talk about',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, saepe nam? Amet dolor mollitia.',
                    icon: {
                        img: 'comment',
                        color: ' #f8d12d' // $txt-dream-of-spring
                    }
                },
                {
                    title: 'And we think about',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, saepe nam? Amet dolor mollitia.',
                    icon: {
                        img: 'cloud',
                        color: ' #80465f' // $txt-wild-plum
                    }
                },
                {
                    title: 'So we draw along',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, saepe nam? Amet dolor mollitia.',
                    icon: {
                        img: 'pen',
                        color: '#eb6950' // $txt-connect-red
                    }
                }
            ],
            blogCards: [
                {
                    img: './src/assets/img/h-2-blog-img-1.jpg',
                    title: 'This way, loves: a detailed guide through new design',
                    text: 'By Riccardo Basso',
                    date: {
                        day: '10',
                        mounth: 'MAY',
                        year: '\'22'
                    }
                },
                {
                    img: './src/assets/img/h-2-blog-img-2.jpg',
                    title: 'I try to give people a different way of looking art',
                    text: 'By Richard Gere',
                    date: {
                        day: '12',
                        mounth: 'JUL',
                        year: '\'23'
                    }
                },
                {
                    img: './src/assets/img/h-2-blog-img-3.jpg',
                    title: 'Introduce Richard Laperrière of those amazing features',
                    text: 'By Peter Dinklage',
                    date: {
                        day: '14',
                        mounth: 'OCT',
                        year: '\'23'
                    }
                },
            ]
        }
    },
    components: { TheSlider, BaseCard, TheJumbotron, BaseSidePopUp },
    methods: {
        getImagePath(imgName) {
            const url = new URL(`../assets/img/${imgName}`, import.meta.url)
            return url.href
        }
    }
}
</script>

<template>
    <main>
        <!-- Pop ups -->
        <BaseSidePopUp />

        <!-- slider -->
        <TheSlider />

        <!-- Gallery -->
        <section id="gallery" class="wrapper">
            <BaseCard :section="'gallery'" v-for="(card, i) in galleryCards" :key="`Gallery card ${i}`"
                :class="'gallery card'" :title="card.title" :subtitle="card.subtitle" v-slot:gallery>
                <img :src="getImagePath(`h-2-port-img-${i + 1}.jpg`)" :alt="`portfolio ${i + 1}`">
            </BaseCard>
        </section>

        <!-- Process Cards -->
        <section id="process-card" class="container-m">
            <h2>Working <span>process</span></h2>
            <div class="wrapper">
                <BaseCard :section="'process-cards'" v-for="(card, i) in processCards" :key="`Process card ${i}`"
                    :className="'process card small'" :title="card.title" :text="card.text" :icon="card.icon" />
            </div>
        </section>

        <!-- jumbotron -->
        <TheJumbotron />

        <!-- Blog List -->
        <section id="blog-list" class="container-m">
            <div class="wrapper">
                <BaseCard :section="'blog-list'" v-for="(card, i) in blogCards" :key="`Blog card ${i}`" :blogImg="card.img"
                    :title="card.title" :text="card.text">
                    <div class="blog-date">
                        <div class="blog-date-top">
                            {{ card.date.day }}
                        </div>
                        <div class="blog-date-bottom">
                            {{ card.date.mounth }}
                            {{ card.date.year }}
                        </div>
                        <!-- Triangoli di sfondo  -->
                        <div class="triangle">
                            <span class="triangle-left">
                            </span>
                            <span class="triangle-right">
                            </span>
                        </div>

                    </div>
                </BaseCard>
            </div>
        </section>

    </main>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/style.scss' as *;
@use '@/assets/scss/_colors.scss' as *;

// Sezione Gallery
#gallery .card {
    overflow: hidden;
    position: relative;
}

// Sezione process card
h2 {
    text-align: center;
    padding-bottom: 40px;
}

@media screen and (min-width: 992px) {
    #process-card .wrapper {
        background-image: url(@/assets/img/svg/svg-3.svg);
        background-repeat: no-repeat;
    }
}

@mixin linearGradient($direction) {
    background-image: linear-gradient(to $direction, white 50%, transparent 50%);
}

#process-card .card:first-child {
    @include linearGradient(right)
}

#process-card .card:last-child {
    @include linearGradient(left)
}

// Sezione blog list
#blog-list {
    padding: 0 -15px;

    .card {
        text-align: start;
        position: relative;
        padding: 0 15px;
        margin-top: 50px;
    }
}

.blog-date {
    position: absolute;
    top: -15px;
    left: 30px;
    width: 66px;
    text-align: center;

    .blog-date-top {
        @include font(35px, 800, $playfair-display, $black);
        line-height: 26px;
        background-color: $bg-otto-ice;
        padding-bottom: 20px;
    }

    .blog-date-bottom {
        @include font(11px, 700, $mulish, $black, 1.1px, uppercase);
        background-color: $bg-comical-coral;
        padding: 5px 0;
    }
}

.triangle {
    display: flex;
    width: 100%;
}

@mixin triangle($direction) {
    width: 50%;
    border-bottom: 15px solid transparent;

    @if $direction =='left' {
        border-left: 33px solid $bg-comical-coral;
    }

    @else if $direction =='right' {
        border-right: 33px solid $bg-comical-coral;
    }
}

.triangle-left {
    @include triangle (left)
}

.triangle-right {
    @include triangle (right)
}
</style>
