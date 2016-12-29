<template>
    <div id="app">
        <app-header></app-header>        

        <div class="wrapper">
        </div>
    </div>
</template>

<script>
import appHeader from './header.vue'

export default {
    components: {
        appHeader 
    },
    data () {
        return {
        }
    }
}
</script>

<style lang="scss">
@import '../../node_modules/scaffold.css/scaffold.css';

@mixin transition($type: all, $duration: 0.5s, $timing: ease, $delay: 0) {
    transition: $type, $duration, $timing, $delay; 
    -o-transition: $type, $duration, $timing, $delay; 
    -moz-transition: $type, $duration, $timing, $delay; 
    -webkit-transition: $type, $duration, $timing, $delay; 
}

@mixin transform-rotate($deg) {
    transform: rotate($deg);
    -o-transform: rotate($deg);
    -ms-transform: rotate($deg);
    -moz-transform: rotate($deg);
    -webkit-transform: rotate($deg);
}

html {
    font-family: sans-serif;
}

#app {
    .wrapper {
        max-width: 800px;
        margin: 0 auto;
    }
}   
</style>
