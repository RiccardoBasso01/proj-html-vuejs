<script>
export default {
    props: {
        className: String,
        section: String,
        title: String,
        text: String,
        blogImg: String
    }
}
</script>

<template>
    <div :class="className || 'card'">
        <!-- Gallery -->
        <slot></slot>

        <!-- Process Cards -->
        <div v-if="section === 'process-cards'">
            <div class="card-img">
            </div>
            <div class="description">
                <div class="card-title">
                    <h5>{{ title }}</h5>
                </div>
                <p>{{ text }}</p>
            </div>
        </div>

        <!-- Blog List -->
        <div v-if="section === 'blog-list'" class="p-2">
            <div class="img">
                <img :src="blogImg">
            </div>
            <div class="description">
                <h3>{{ title }}</h3>
                <span>{{ text }}</span>
            </div>
        </div>
    </div>
</template>




<style lang="scss" scoped>
@use '../assets/scss/_colors.scss' as *;
@use '../assets/scss/style.scss' as *;

.description {
    font-size: var(--font-size-s);
}

.process.card>div {
    @include flex(column, center, center)
}

.process .card-img {
    @include rounded(162px);
    background-color: $bg-milk-glass;
}


//---------------------------------------------- Logica card responsive
@media screen and (min-width: 700px) {
    .card {
        width: calc(100% / 2);

        &.small:not(footer .card) {
            width: calc(100%);
        }
    }
}

@media screen and (min-width: 768px) {
    .card {
        width: calc(100% / 3);

        &.small {
            width: calc(100% / 2);
        }
    }
}

@media screen and (min-width: 992px) {

    .card.small,
    .card.small:not(footer .card) {
        width: calc(100% / 4);
    }
}
</style>
