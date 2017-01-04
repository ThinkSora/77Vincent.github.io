<template>
    <header>
        <router-link to="/blogs" class="logo"></router-link>
        <h1><strong>77</strong>weblog</h1>
        <router-link to="/about" class="photo"></router-link>
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
@import "../assets/scss/meta";

header {
    padding: 21px;
    text-align: center;
    margin-bottom: 27px;

    .logo,
    .photo {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        @include transition(transform, 1.5s);
        
        &:hover {
            @include transform-rotate(360deg);
        }
    }

    .logo {
        float: left;
        background-image: url(../assets/media/logo.svg);
    }
    
    .photo {
        float: right;
        background-image: url(../assets/media/photo.jpg);
    }

    h1 {
        display: inline-block;
        vertical-align: middle;
        margin: 0;
        letter-spacing: 0.5em;
        animation: spin 7s 1s ease infinite;

        strong {
            display: inline-block;
        }
    }
}
</style>
