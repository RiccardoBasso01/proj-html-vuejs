<script>
export default {
    props: {
        className: String,
        section: String,
        title: String,
        text: String,
        icon: Object,
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
            <div class="card-img"><font-awesome-icon :icon="['fas', icon.img]" :style="{ color: icon.color }" /></div>
            <div class="description">
                <div class="card-title">
                    <h4 class="pY-2">{{ title }}</h4>
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
                <span class="txt-playfair-display">{{ text }}</span>
            </div>
        </div>
    </div>
</template>




<style lang="scss" scoped>
@use '../assets/scss/_colors.scss' as *;
@use '../assets/scss/style.scss' as *;

// Sezione Process card
.process.card>div {
    @include flex(column, center, center)
}

.process .card-img {
    @include rounded(162px);
    @include flex(row, center, center);
    background-color: $bg-milk-glass;
    font-size: 50px;
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
