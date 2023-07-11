<script>
import BaseCard from './BaseCard.vue';
export default {
    components: { BaseCard }
}
</script>

<template>
    <footer>
        <div class="container-m">
            <div class="wrapper">


                <BaseCard :className="'card small'">
                    <img src="../assets/img/logo-sidearea-1.png" alt="">
                    <div>lets get crative</div>
                </BaseCard>

                <BaseCard :className="'card small'">
                    <div>maree.osvner@gmail.com</div>
                    <div>lets get crative</div>
                </BaseCard>

                <BaseCard :className="'card small'">
                    <div>andre street 10</div>
                    <div>lets get crative</div>
                </BaseCard>

                <BaseCard :className="'card small'">
                    <div>stay in touch with us</div>
                    <div>lets get crative</div>
                </BaseCard>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_colors.scss' as *;

footer {
    background-color: $bg-otto-ice;
    padding: 70px 0;
}

.card {
    text-align: start;
    padding: 30px 0;
}

img {
    width: 150px;
}
</style>