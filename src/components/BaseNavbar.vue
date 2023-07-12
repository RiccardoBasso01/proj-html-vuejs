<script></script>

<template>
    <div class="navbar">
        <ul class="text-uppercase">
            <li><a href="#">Home</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Elements</a></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_colors.scss' as *;
@use '../assets/scss/style.scss' as *;

.navbar {
    display: none;
}

ul {
    display: flex;
    gap: 50px;
}

@media screen and (min-width: 992px) {
    .navbar {
        display: flex;
    }
}
</style>
