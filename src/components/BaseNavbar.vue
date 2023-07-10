<script></script>

<template>
    <div class="navbar">
        <ul>
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
.navbar {
    display: none;
}

ul {
    display: flex;
}

@media screen and (min-width: 992px) {
    .navbar {
        display: flex;
    }
}
</style>
