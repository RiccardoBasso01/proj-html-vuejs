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
        <ul class="text-uppercase">
            <li v-for="link in links"><a href="#">{{ link }}</a></li>
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
