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
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 0 15px 0 $color-gray;

    p {
        margin: 0;
    }
}
</style>
