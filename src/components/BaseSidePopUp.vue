<script>
</script>

<template>
    <!-- Side Pop Up -->
    <div class="pop-up-top">
        <a href="#"><img src="@/assets/img/svg/svg-4.svg" alt="pop-up-img"></a>
        <div class="pop-up-text">related</div>
    </div>
    <div class="pop-up-bottom">
        <a href="#"><img src="@/assets/img/svg/svg-6.svg" alt="pop-up-img"></a>
        <div class="pop-up-text">buy now</div>
    </div>

    <!-- Frecia pop-up -->
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_colors.scss' as *;
@use '@/assets/scss/style.scss' as *;


@mixin pop_up($top, $right: 0, $background-color: $white, $color: black) {
    @include flex(center, center);
    position: fixed;
    top: $top;
    right: $right;
    z-index: 1;
    background-color: $background-color;

    &:hover {
        .pop-up-text {
            width: 70px;
            color: $color;
        }
    }
}

a {
    @include flex(center, center);
    width: 45px;
    height: 45px;
}

.pop-up-top {
    @include pop_up(15%, 0, $bg-strawberry-pop, $color: $white);

    img {
        width: 25px;
    }
}

.pop-up-bottom {
    @include pop_up(22%);
    box-shadow: 0 0 1px 2px $bg-shadow;

    img {
        width: 20px;
    }
}

.pop-up-text {
    @include font(10px, 700, $color: transparent, $letter-spacing: 1.2px, $text-transform: uppercase);
    width: 0;
    transition: width .3s, color .2s .1s;
    white-space: nowrap;
}
</style>