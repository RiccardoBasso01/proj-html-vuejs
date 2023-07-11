<script>
import BaseCard from './BaseCard.vue';
export default {
    components: { BaseCard }
}
</script>

<template>
    <footer>
        <div class="container-m">

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
    </footer>
</template>

<style lang="scss" scoped>
footer {
    min-height: 300px;
}
</style>