<template>
  <header :class="{loaded: !this.$store.state.loading, loading: this.$store.state.loading}">
    <a target="_blank" href="https://github.com/77Vincent" class="github navicon"></a>
    <router-link to="/about" class="photo navicon"></router-link>
    <router-link to="/"><h1>77的博客</h1></router-link>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "../assets/meta";
header {
  position: relative;
  padding: 9px 20px 9px 30px;
  font-family: $font-theme;
  color: white;

  &:before {
    display: block;
    left: 0;
    top: 0;
    content: "";
    position: absolute;
    height: 100%;
    background-color: $color-theme;
  }

  &.loading {
    &:before {
      animation: loading 4s linear forwards;
    }
  }

  &.loaded {
    &:before {
      width: 100%;
      animation: loaded 0.1s 0.2s linear forwards;
    }
  }

  .navicon {
    float: right;
    width: 27px;
    height: 27px;
    border-radius: 50%;
    margin-left: 10px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    @include transition(all, 1.5s);
    @media (max-width: $bp-mobile) {
      width: 25px;
      height: 25px;
    }
    &:hover {
      @include transform-rotate(360deg);
    }
  }
  .github {
    background-image: url(http://7xr7xo.com1.z0.glb.clouddn.com/icon-github-white.png);
  }
  .photo {
    background-image: url(https://avatars0.githubusercontent.com/u/12905966?s=40&v=4);
  }
}

h1 {
  font-size: 1.2em;
  display: inline-block;
  text-transform: uppercase;
  vertical-align: middle;
  margin: 0;
  position: relative;
  z-index: 1;
  font-weight: bold;
}
</style>
