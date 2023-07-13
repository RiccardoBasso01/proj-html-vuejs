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

    <!-- Frecia back to top -->
    <div class="back-to-top">
        <a href="#" class="top">
            <img src="@/assets/img/svg/svg-2.svg" alt="">
        </a>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_colors.scss' as *;
@use '@/assets/scss/style.scss' as *;


@mixin pop_up($top: auto, $right: 0, $bottom: auto, $background-color: $white, $color: black, $position: fixed) {
    @include flex(center, center);
    position: $position;
    top: $top;
    bottom: $bottom;
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
    @include pop_up(15%, 0, $background-color: $bg-strawberry-pop, $color: $white);

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

// Frecia back to top
.back-to-top {
    @include pop_up($bottom: 20px, $right: auto, $background-color: $bg-otto-ice, $color: white, $position: sticky);
    left: 20px;
    width: 45px;
    margin-top: calc(100vh + 50px);
    margin-right: 0;

    img {
        width: 20px;
    }
}
</style>