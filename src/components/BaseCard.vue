<script>
export default {
    props: {
        className: String
    }
}
</script>

<template>
    <div :class="className || 'card'">

    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/style.scss' as *;

.card {
    @include square(100%);
    height: calc(100vw / 3);
    display: inline-block;
    border-radius: 0;
    margin: -3px; // DA RIMUOVERE

    &.small {
        height: 100px;
    }
}

// Card Responsive
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
