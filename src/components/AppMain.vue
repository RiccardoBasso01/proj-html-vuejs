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
            <BaseCard v-for="n in 6" :key="n">
                <img :src="getImagePath(`h-2-port-img-${n}.jpg`)" :alt="`portfolio ${n}`">
            </BaseCard>
        </section>

        <section id="working-process">
            <div class="container-m">
                <h3>Working process</h3>
                <BaseCard v-for="n in 4" :key="n" :className="'card small'">
                    <div>
                        <img :src="getImagePath()" alt="">
                    </div>
                    <div class="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, doloremque tempora omnis veritatis,
                    </div>
                </BaseCard>
            </div>
        </section>

        <!-- jumbotron -->
        <TheJumbotron />

        <section id="blog-list">
            <div class="container-m">
                <BaseCard v-for="n in 3" :key="n">
                    <div class="img">
                        <img :src="getImagePath(`h-2-blog-img-${n}.jpg`)" :alt="`blog ${n}`">
                    </div>
                    <div class="description">
                        Lorem ipsum dolor sit amet consectetu
                    </div>
                </BaseCard>
            </div>
        </section>

    </main>
</template>

<style lang="scss" scoped>
.description {
    font-size: var(--font-size-s);
}
</style>
