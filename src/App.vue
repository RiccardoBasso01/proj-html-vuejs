<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import BaseSidePopUp from './components/BaseSidePopUp.vue';

export default {
    components: { AppHeader, AppMain, AppFooter, BaseSidePopUp },
}
</script>

<template>
    <!-- Header -->
    <AppHeader />

    <!-- Main -->
    <AppMain />

    <!-- Footer -->
    <AppFooter />

    <!-- Pop ups -->
    <BaseSidePopUp />
</template>

<style lang="scss">
@use './assets/scss/style.scss' as *;
</style>