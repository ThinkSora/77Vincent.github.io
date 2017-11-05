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
  },
}
</script>

<style lang="scss">
@import "../../node_modules/scaffold.css/scaffold.css";
@import "../assets/meta";

html {
  line-height: 1.5;
  font-family: monospace;
  position: relative;
  letter-spacing: 1px;

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-image: url("../assets/mountain.jpeg");
    background-size: cover;
    filter: blur(20px);
    -ms-filter: blur(20px);
    -webkit-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: -1;
    opacity: 0.15;
  }
}

ul, ol {
  list-style-position: inside;
}

p {
  font-size: 14px;
}

blockquote {
  border-left: 4px solid $color-gray;
  margin-left: 0;
  padding-left: 10px;
  opacity: 0.6;
}

.wrapper {
  margin: 0 auto;
  padding: 90px 0 20px 0;
  max-width: 800px;
  min-height: 90vh;
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
  text-transform: capitalize;

  @include transition(letter-spacing, 0.3s);
  &:hover {
    letter-spacing: 0.3em;
  }
}

pre {
  border: 1px solid $color-middlegray;
  -moz-white-space: pre-wrap;
  -o-white-space: pre-wrap;
  -white-space: pre-wrap;
  white-space: pre-wrap;
  background-color: $color-lightgray;
  padding: 15px 25px;
  border-radius: 5px;
}

a {
  text-decoration: none;
}

section {
  margin: 0.6em 0;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
}

.markdown {
  font-size: 1.05em;

  h2 {
    border-bottom: 1px solid $color-middlegray;
    font-weight: bold;
    padding-bottom: 5px;
    margin-top: 15px;
  }
}
</style>
