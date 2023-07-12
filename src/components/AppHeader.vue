<script>
import BaseNavbar from './BaseNavbar.vue'

export default {
    components: { BaseNavbar }
}
</script>

<template>
    <header class="container-m">
        <div class="logo">
            <img src="../assets/img/logo-sidearea-1.png" alt="logo">
        </div>

        <div class="menu">
            <!-- Navbar -->
            <BaseNavbar />

            <button>
                <img src="../assets/img/svg/svg-1.svg" alt="menu">
            </button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/style.scss' as *;

header {
    @include flex(space-between, center);
    height: 70px
}

.menu {
    @include flex(space-between, center);
    gap: 20px;
}

button {
    margin-left: 20px;
}
</style>