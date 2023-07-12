<script>
import TheSlider from './TheSlider.vue';
import BaseCard from './BaseCard.vue';
import TheJumbotron from './TheJumbotron.vue';

export default {
    data() {
        return {
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
                    text: 'By Emily Fields'
                },
                {
                    img: './src/assets/img/h-2-blog-img-2.jpg',
                    title: 'I try to give people a different way of looking art',
                    text: 'By Emily Fields'
                },
                {
                    img: './src/assets/img/h-2-blog-img-3.jpg',
                    title: 'Introduce Richard Laperrière of those amazing features',
                    text: 'By Emily Fields'
                },
            ]
        }
    },
    components: { TheSlider, BaseCard, TheJumbotron },
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
        <!-- slider -->
        <TheSlider />

        <!-- Gallery -->
        <section class="wrapper">
            <BaseCard v-for="n in 6" :key="n">
                <img :src="getImagePath(`h-2-port-img-${n}.jpg`)" :alt="`portfolio ${n}`">
            </BaseCard>
        </section>

        <!-- Process Cards -->
        <section id="process-card" class="container-m">
            <h2>Working <span class="txt-playfair-display bold">process</span></h2>
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
                    :title="card.title" :text="card.text" />
            </div>
        </section>

    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/style.scss' as *;
@use '../assets/scss/_colors.scss' as *;

// Sezione process card
h2 {
    text-align: center;
    padding: 90px 0 40px 0;
}

@media screen and (min-width: 992px) {
    #process-card .wrapper {
        background-image: url(../assets/img/svg/svg-3.svg);
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
    padding: 0 -20px;
}
</style>
