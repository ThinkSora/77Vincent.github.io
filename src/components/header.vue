<template>
  <header>
    <a target="_blank" href="https://github.com/77Vincent" class="github navicon"></a>
    <router-link to="/"><h1><strong>77</strong>Vincent's blog</h1></router-link>
    <router-link to="/about" class="photo navicon"></router-link>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "../assets/meta";
header {
  font-family: monospace;
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid $color-middlegray;
  background-color: #fff;
  @include transition(all, 0.5s);

  .navicon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
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
  float: left;
  background-image: url(http://7xr7xo.com1.z0.glb.clouddn.com/icon-github.png);
}
.photo {
  float: right;
  background-image: url(https://avatars0.githubusercontent.com/u/12905966?s=40&v=4);
}

  h1 {
    font-size: 1.75em;
    display: inline-block;
    text-transform: uppercase;
    vertical-align: middle;
    margin: 0;
    animation: expand 7s 1s ease infinite;
    strong {
      display: inline-block;
    }
  }
}
</style>
