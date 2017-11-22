<template>
  <div>
    <app-header></app-header>

    <div :class="{fixed: fixed}" class="wrapper">
      <router-view></router-view>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from './header.vue';
import appFooter from './footer.vue';

console.log("欢迎来到我的博客！");

export default {
  components: {
    appHeader,
    appFooter,
  },
  data() {
    return {
      fixed: 0,
      blogs: null,
      labels: null
    }
  },
  mounted() {
    window.onscroll = () => this.fixed = window.pageYOffset > 65 ? 1 : 0;
  }
}
</script>

<style lang="scss">
@import "../../node_modules/scaffold.css/scaffold.css";
@import "../../node_modules/prismjs/themes/prism-okaidia.css";
@import "../assets/vendor/font-awesome.min.css";
@import "../assets/meta";
html {
  line-height: 1.5;
  letter-spacing: 1px;
  font-family: $font-basic;
  background-color: $color-white;
  -webkit-font-smoothing: antialiased;
}

section {
  padding-top: 10px;
  padding-bottom: 10px;

  &:first-child {
    padding-top: 0;
  }
}

img {
  max-width: 100%;
}

a {
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
}

ul,
ol {
  list-style-position: inside;
}

article {
  font-size: 0.95em;
  max-width: 700px;
  h2 {
    @extend .text-underline;
  }
  a {
    color: $color-theme;
    text-decoration: underline;
  }
}

blockquote {
  border-left: 4px solid $color-gray;
  margin-left: 0;
  padding-left: 10px;
  opacity: 0.45;
  font-weight: bold;
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
  font-size: $font-m;
}

button {
  background-color: $color-theme;
  color: #fff;
  font-weight: bold !important;
  padding: 2px 6px;
  margin-bottom: 10px;
  margin-right: 7px;
  border-radius: 3px;
  font-size: $font-s;
  display: inline-block;
  letter-spacing: inherit !important;
  line-height: inherit !important;
  cursor: pointer;
  position: relative;
  @include transition(all, 0.2s);
  &:hover {
    box-shadow: 0px 0px 6px $color-gray;
    opacity: 0.9;
  }
  &:before {
    margin-right: 2px;
  }
  &:after {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 3px;
    opacity: 0.35;
    background: rgba(199, 199, 199, 0);
    background: -moz-linear-gradient(top, rgba(199, 199, 199, 0) 0%, rgba(238, 238, 238, 0) 55%, rgba(255, 255, 255, 0.53) 79%, rgba(199, 199, 199, 1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(199, 199, 199, 0)), color-stop(55%, rgba(238, 238, 238, 0)), color-stop(79%, rgba(255, 255, 255, 0.53)), color-stop(100%, rgba(199, 199, 199, 1)));
    background: -webkit-linear-gradient(top, rgba(199, 199, 199, 0) 0%, rgba(238, 238, 238, 0) 55%, rgba(255, 255, 255, 0.53) 79%, rgba(199, 199, 199, 1) 100%);
    background: -o-linear-gradient(top, rgba(199, 199, 199, 0) 0%, rgba(238, 238, 238, 0) 55%, rgba(255, 255, 255, 0.53) 79%, rgba(199, 199, 199, 1) 100%);
    background: -ms-linear-gradient(top, rgba(199, 199, 199, 0) 0%, rgba(238, 238, 238, 0) 55%, rgba(255, 255, 255, 0.53) 79%, rgba(199, 199, 199, 1) 100%);
    background: linear-gradient(to bottom, rgba(199, 199, 199, 0) 0%, rgba(238, 238, 238, 0) 55%, rgba(255, 255, 255, 0.53) 79%, rgba(199, 199, 199, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c7c7c7', endColorstr='#c7c7c7', GradientType=0);
  }
  &.disabled {
    background-color: $color-middlegray !important;
    color: $color-darkgray;
    opacity: 0.5;
  }
}
.button {
  @extend button;
}

// **********************************************************
.wrapper {
  margin: 0 auto;
  display: flex;
}

.flex {
  width: 100%;
  display: flex;
  display: -webkit-flex;
}

.block-left {
  justify-content: space-between;
  width: 300px;
  padding: 20px 15px;
  border-right: 1px solid $color-middlegray;
  box-shadow: 5px 0px 20px rgba(200, 200, 200, 0.5);
  // @media (max-width: 1200px) {
  //   padding-left: 10%;
  // }
  // @media (max-width: 800px) {
  //   padding-left: 15px;
  //   width: 65%;
  // }
}

.block-right {
  padding: 20px 30px 60px;
  min-height: 95vh;
  flex: 1;
  // @media (max-width: 1200px) {
  //   padding-right: 10%;
  // }
  // @media (max-width: 800px) {
  //   padding-right: 15px;
  //   width: 35%;
  // }
}

.fixed {
  position: relative;

  .block-left {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
  }

  .block-right {
    margin-left: 300px;
  }
}
</style>
