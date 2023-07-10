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
    @include square(calc(100% / 3));
    height: calc(100vw / 3);
    display: inline-block;
    border-radius: 0;
    margin: -3px; // DA RIMUOVERE

    &.small {
        @include square(calc(100% / 4));
        height: 280px;
    }
}
</style>
