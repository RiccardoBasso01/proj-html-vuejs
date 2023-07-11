<script>
import TheSlider from './TheSlider.vue';
import BaseCard from './BaseCard.vue';
import TheJumbotron from './TheJumbotron.vue';

export default {
    data() {
        return {

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

        <section id="big-card">
            <div class="wrapper">
                <BaseCard v-for="n in 6" :key="n">
                    <img :src="getImagePath(`h-2-port-img-${n}.jpg`)" :alt="`portfolio ${n}`">
                </BaseCard>
            </div>
        </section>

        <section id="working-process">
            <div class="container-m">
                <h2>Working <span class="txt-playfair-display">process</span></h2>
                <div class="wrapper">

                    <BaseCard v-for="n in 4" :key="n" :className="'card small'">
                        <div class="card-flex">
                            <div class="card-img-round">
                                <img :src="getImagePath()" alt="">
                            </div>
                            <div class="description">
                                <div class="card-title">
                                    <h5>Titolo card</h5>
                                </div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, doloremque tempora omnis
                                veritatis,
                            </div>
                        </div>
                    </BaseCard>
                </div>

            </div>
        </section>

        <!-- jumbotron -->
        <TheJumbotron />

        <section id="blog-list">
            <div class="container-m">
                <div class="wrapper">

                    <BaseCard v-for="n in 3" :key="n">
                        <div class="img">
                            <img :src="getImagePath(`h-2-blog-img-${n}.jpg`)" :alt="`blog ${n}`">
                        </div>
                        <div class="description">
                            <h3>Card title ...</h3>
                            <span>By emily</span>
                        </div>
                    </BaseCard>
                </div>

            </div>
        </section>

    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/style.scss' as *;
@use '../assets/scss/_colors.scss' as *;

.description {
    font-size: var(--font-size-s);
}

.card-flex {
    @include flex(column, center, center)
}

.card-img-round {
    @include square(162px);
    @include flex(row, center, center);
    background-color: $bg-milk-glass;
    border-radius: 50%;
}

#blog-list .card {
    padding: 20px;
}
</style>
