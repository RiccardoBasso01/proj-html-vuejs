<script>
import BaseCard from './BaseCard.vue';
export default {
    data() {
        return {

        }
    },
    components: { BaseCard }
}
</script>

<template>
    <footer>
        <div class="container-m">
            <div class="wrapper">
                <BaseCard :className="'card small'">
                    <a href="#"><img src="../assets/img/logo-sidearea-1.png" alt="footer logo"></a>
                    <div class="mt-1">Lets get crative</div>
                </BaseCard>

                <BaseCard :className="'card small'">
                    <div><a href="#">maree@qodeinteractive.com</a></div>
                    <div><a href="#" class="mt-1">+44645 321 789</a></div>
                </BaseCard>

                <BaseCard :className="'card small'">
                    <div><a href="#">Avenue d’Auderghem 10</a></div>
                    <div><a href="#" class="mt-1">1040 Brussels, Belgium</a></div>
                </BaseCard>

                <BaseCard :className="'card small'">
                    <div>Stay in touch with us</div>
                    <ul class="flex gap-3 mt-1">
                        <li><a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
                        <li><a href="#"><font-awesome-icon :icon="['fab', 'pinterest-p']" /></a></li>
                        <li><a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a></li>
                        <li><a href="#"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a></li>
                    </ul>
                </BaseCard>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_colors.scss' as *;

footer {
    background-color: $bg-otto-ice;
    padding: 70px 5%;
}

.card {
    text-align: start;
    padding: 30px 0;
}

img {
    width: 130px;
}

li {
    color: $black;
}
</style>