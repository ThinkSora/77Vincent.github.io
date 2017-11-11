<template>
  <div>
    <app-header></app-header>

    <div :class="{fixed: fixed}" class="wrapper clearfix">
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
  data() {
    return {
      fixed: false 
    }
  },
  mounted() {
    window.onscroll = () => this.fixed = window.pageYOffset > 65 ? true : false;
  },
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

ul, ol {
  list-style-position: inside;
}

blockquote {
  border-left: 4px solid $color-gray;
  margin-left: 0;
  padding-left: 10px;
  opacity: 0.45;
  font-weight: bold;
}

.wrapper {
  margin: 0 auto;
  min-height: 90vh;
}

.loading-bar {
  animation: processing 3s linear infinite;
  position: absolute;
  z-index: 9;
  left: 0;
  top: 65px;
  height: 2px;
  width: 100%;
  background-color: $color-theme;
}

img {
  max-width: 100%;
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

a {
  text-decoration: none;
}

.block-left {
  float: left;
  min-height: 90vh;
  padding-top: 15px;
  padding-left: 17%;
  padding-bottom: 30px;
  width: 65%;
  padding-right: 15px;
  border-right: 1px solid $color-middlegray;
  box-shadow: 5px 2px 20px $color-lightgray;

  @media (max-width: 1200px) {
    padding-left: 10%;
    width: 70%;
  }
  @media (max-width: 800px) {
    padding-left: 5%;
    width: 60%;
  }
}

.block-right {
  float: right;
  width: 35%;
  padding-top: 15px;
  padding-right: 17%;

  @media (max-width: 1200px) {
    padding-right: 10%;
    width: 30%;
  }
  @media (max-width: 800px) {
    padding-left: 5%;
    width: 40%;
  }
}

button {
  background-color: $color-darkgray;
  color: #fff;
  padding: 2px 6px;
  margin-bottom: 10px;
  margin-right: 7px;
  border-radius: 3px;
  font-size: $font-s;
  max-width: 120px;
  display: block;
  letter-spacing: inherit;
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
    opacity: 0.3;
    background: rgba(199,199,199,0);
    background: -moz-linear-gradient(top, rgba(199,199,199,0) 0%, rgba(238,238,238,0) 55%, rgba(255,255,255,0.53) 79%, rgba(199,199,199,1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(199,199,199,0)), color-stop(55%, rgba(238,238,238,0)), color-stop(79%, rgba(255,255,255,0.53)), color-stop(100%, rgba(199,199,199,1)));
    background: -webkit-linear-gradient(top, rgba(199,199,199,0) 0%, rgba(238,238,238,0) 55%, rgba(255,255,255,0.53) 79%, rgba(199,199,199,1) 100%);
    background: -o-linear-gradient(top, rgba(199,199,199,0) 0%, rgba(238,238,238,0) 55%, rgba(255,255,255,0.53) 79%, rgba(199,199,199,1) 100%);
    background: -ms-linear-gradient(top, rgba(199,199,199,0) 0%, rgba(238,238,238,0) 55%, rgba(255,255,255,0.53) 79%, rgba(199,199,199,1) 100%);
    background: linear-gradient(to bottom, rgba(199,199,199,0) 0%, rgba(238,238,238,0) 55%, rgba(255,255,255,0.53) 79%, rgba(199,199,199,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#c7c7c7', endColorstr='#c7c7c7', GradientType=0 );
  }

  &.disabled {
    background-color: $color-middlegray !important;
    color: $color-darkgray;
    opacity: 0.5;
  }
}

section {
  padding-top: 12px;
  padding-bottom: 12px;
}

article {
  font-size: 0.95em;

  h2 {
    border-bottom: 1px solid $color-middlegray;
    font-weight: bold;
    padding-bottom: 5px;
    margin-top: 40px;

    &:first-child {
      margin-top: 0;
    }
  }

  a {
    color: $color-theme;
    text-decoration: underline;
  }
}

.fixed {
  position: relative;

  .block-right {
    position: fixed;
    top: 0;
    right: 0;
  }
}
</style>
