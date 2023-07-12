<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    components: { AppHeader, AppMain, AppFooter },
}
</script>

<template>
    <!-- Header -->
    <AppHeader />

    <!-- Main -->
    <AppMain />

    <!-- Footer -->
    <AppFooter />
</template>

<style lang="scss">
@use './assets/scss/style.scss' as *;


.txt-playfair-display {
    font-family: $playfair-display;
}
</style>