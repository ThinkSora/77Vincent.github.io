<template>
  <header>
    <a href="https://github.com/77Vincent/77Vincent.github.io" class="logo navicon"></a>
    <router-link to="/"><h1><strong>77</strong>weblog</h1></router-link>
    <router-link to="/about" class="photo navicon"></router-link>
  </header>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/meta";
header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px;
  text-align: center;
  background: $color-white;
  opacity: 0.9;
  .navicon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    @include transition(transform, 1.5s);
    @media (max-width: $bp-mobile) {
      width: 25px;
      height: 25px;
    }
    &:hover {
      @include transform-rotate(360deg);
    }
    &.logo {
      float: left;
      background-image: url(http://7xr7xo.com1.z0.glb.clouddn.com/77-logo.svg);
    }
    &.photo {
      float: right;
      background-image: url(http://7xr7xo.com1.z0.glb.clouddn.com/77-photo.jpg);
    }
  }
  h1 {
    display: inline-block;
    text-transform: uppercase;
    vertical-align: middle;
    margin: 0;
    letter-spacing: 0.5em;
    animation: expand 7s 1s ease infinite;
    strong {
      display: inline-block;
    }
  }
}
</style>
