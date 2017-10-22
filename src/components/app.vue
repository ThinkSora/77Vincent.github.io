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
import appHeader from './header.vue'
import appFooter from './footer.vue'

export default {
  components: {
    appHeader,
    appFooter
  },
  data() {
    return {}
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
    margin: 3em 0;
  }
}
</style>
