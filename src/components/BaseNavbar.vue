<script>
export default {
    data() {
        return {
            links: ['home', 'pages', 'portfolio', 'blog', 'shop', 'elements']
        }
    }
}
</script>

<template>
    <div class="navbar">
        <ul>
            <li v-for="link in links"><a href="#">{{ link }}</a></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_colors.scss' as *;
@use '@/assets/scss/style.scss' as *;

.navbar {
    display: none;
}

ul {
    @include font(xs, 700, $color: $black, $letter-spacing: 3px, $text-transform: uppercase);
    display: flex;
    gap: 50px;
}

li {
    @include text_underscore($bg-otto-ice, 5px, .2s);
}

@media screen and (min-width: 992px) {
    .navbar {
        display: flex;
    }
}
</style>
