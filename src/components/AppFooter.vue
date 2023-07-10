<script>
import BaseCard from './BaseCard.vue';
export default {
    components: { BaseCard }
}
</script>

<template>
    <footer>
        <div class="container-m">

            <BaseCard v-for="n in 4" :className="'card small'" />
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    min-height: 300px;
}
</style>