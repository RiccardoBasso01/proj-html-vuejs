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
                    text: 'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.'
                },
                {
                    title: 'Then we talk about',
                    text: 'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.'
                },
                {
                    title: 'And we think about',
                    text: 'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.'
                },
                {
                    title: 'So we draw along',
                    text: 'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.'
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
        <section class="container-m">
            <h2>Working <span class="txt-playfair-display">process</span></h2>
            <div class="wrapper">
                <BaseCard :section="'process-cards'" v-for="(card, i) in processCards" :key="`Process card ${i}`"
                    :className="'process card small'" :title="card.title" :text="card.text" />
            </div>
        </section>

        <!-- jumbotron -->
        <TheJumbotron />

        <!-- Blog List -->
        <section class="container-m">
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
</style>
