<template>
    <footer>
        <p>Built and powered by Vue.js and webpack</p>
    </footer>
</template>

<script>
export default {
    data () {
        return {
        }
    }
}
</script>

<style lang="scss">
@import "../assets/scss/meta";

footer {
    background: $color-darkgray;
    color: #fff;
    padding: 5px;
    text-align: center;

    p {
        margin: 0;
    }
}
</style>
