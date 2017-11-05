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
    appFooter,
  },
  methods: {
    errorDone() {

    },
    progressDone() {
    }
  },
  data() {
    return {};
  },
}
</script>

<style lang="scss">
@import "../../node_modules/scaffold.css/scaffold.css";
@import "../../node_modules/prismjs/themes/prism.css";
@import "../assets/vendor/font-awesome.min.css";
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
    filter: blur(30px);
    -ms-filter: blur(30px);
    -webkit-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
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
  opacity: 0.5;
}

.wrapper {
  margin: 0 auto;
  padding: 80px 0 20px 0;
  max-width: 800px;
  min-height: 90vh;
  @media (max-width: 800px) {
    padding-right: 5%;
    padding-left: 5%;
  }
}

.icon-loading {
  animation: spin 1.5s linear infinite;
  content: "";
  display: block;
  position: absolute;
  z-index: 9;
  left: 50%;
  top: 50%;
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
  padding: 15px;
  border-radius: 5px;
  letter-spacing: 0;
  font-size: 13px;
}

a {
  text-decoration: none;
}

section {
  margin: 0.5em 0;
}

.breadcrumbs {
  font-size: 12px;
  color: $color-darkgray;
  font-family: sans-serif;

  &:after {
    content: "";
    display: block;
    clear: both;
  }

  .labels {
    float: left;
  }

  .info {
    float: right;
    text-align: right;

    span {
      &:after {
        content: "/";
        display: inline;
        margin-left: 7px;
      }

      &:last-child:after {
        display: none;
      }
    }
  }
}

.label {
  padding: 2px 6px;
  margin-right: 7px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: bold;
}

.markdown {
  font-size: 1.05em;
  margin-top: 40px;

  h2 {
    border-bottom: 1px solid $color-middlegray;
    font-weight: bold;
    padding-bottom: 5px;
    margin-top: 30px;

    &:first-child {
      margin-top: 0;
    }
  }
}
</style>
