<script>
import TheSlider from './TheSlider.vue';
import BaseCard from './BaseCard.vue';
import TheJumbotron from './TheJumbotron.vue';

export default {
    components: { TheSlider, BaseCard, TheJumbotron }
}
</script>

<template>
    <main>
        <!-- slider -->
        <TheSlider />

        <!-- cards -->
        <BaseCard v-for="n in 6" />

        <h3>Working process</h3>
        <div class="container-m">
            <BaseCard v-for="n in 4" :className="'card small'" />
        </div>

        <!-- jumbotron -->
        <TheJumbotron />

        <!-- cards -->
        <div class="container-m">
            <BaseCard v-for="n in 3" />
        </div>

    </main>
</template>

<style lang="scss" scoped></style>
