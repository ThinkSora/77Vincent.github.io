<template>
  <div id="app">
    <app-header></app-header>
    

    <div class="wrapper">
      <router-view></router-view>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from './header.vue';
import appFooter from './footer.vue';

export default {
  components: {
    appHeader,
    appFooter
  },
  data() {
    return {};
  }
}
</script>

<style lang="scss">
@import "../../node_modules/scaffold.css/scaffold.css";
@import "../assets/scss/meta";

html {
  line-height: 1.5;
  font-family: monospace;
  background-color: $color-white;
}

.wrapper {
  // max-width: $bp-desktop;
  margin: 0 auto;
  padding: 75px 0 20px 0;
  @media (max-width: 800px) {
    padding-right: 5%;
    padding-left: 5%;
  }
}

.icon-loading {
  &:before {
    animation: spin 1.5s linear infinite;
    content: "";
    display: block;
    width: 50px;
    height: 50px;
    background-image: url(http://7xr7xo.com1.z0.glb.clouddn.com/77-logo.svg);
    background-size: contain;
    position: absolute;
    z-index: 9;
    left: 50%;
    top: 50%;
    margin-left: -25px;
    margin-top: -25px;
  }
}

h2 {
  text-decoration: underline;
  text-transform: capitalize;
  @include transition(letter-spacing, 0.3s);
  &:hover {
    letter-spacing: 0.3em;
  }
}

pre {
  -moz-white-space: pre-wrap;
  -o-white-space: pre-wrap;
  -white-space: pre-wrap;
  white-space: pre-wrap;
  background-color: $color-lightgray;
  padding: 15px 25px;
  border-radius: 5px;
}

#app {
  section {
    margin: 0.6em 0;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
  }
}
</style>
