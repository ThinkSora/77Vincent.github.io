<template>
    <header>
        <img class="logo" src="../assets/logo.svg">
        <h1>'s Blog</h1>
    </header>
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
header {
    padding: 5px 30px;

    .logo {
        max-width: 35px;
        width: 5%;
        min-width: 20px;
        vertical-align: middle;
    }

    h1 {
        display: inline-block;
        vertical-align: middle;
    }
}
</style>
