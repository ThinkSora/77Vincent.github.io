<template>
  <header :class="{loaded: !this.$store.state.loading, loading: this.$store.state.loading}">
    <a target="_blank" href="https://github.com/77Vincent" class="github navicon"></a>
    <router-link to="/about" class="photo navicon"></router-link>
    <router-link to="/"><h1><strong>77</strong>的博客</h1></router-link>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "../assets/meta";
header {
  position: relative;
  padding: 15px 30px;
  font-family: $font-theme;
  border-bottom: 1px solid $color-middlegray;
  background-color: #fff;
  @include transition(all, 0.5s);

  &:before {
    display: block;
    left: 0;
    top: 0;
    content: "";
    position: absolute;
    height: 100%;
    opacity: 0.3;
    background: rgba(224,207,204,0);
    background: -moz-linear-gradient(left, rgba(224,207,204,0) 0%, rgba(15,126,116,1) 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(224,207,204,0)), color-stop(100%, rgba(15,126,116,1)));
    background: -webkit-linear-gradient(left, rgba(224,207,204,0) 0%, rgba(15,126,116,1) 100%);
    background: -o-linear-gradient(left, rgba(224,207,204,0) 0%, rgba(15,126,116,1) 100%);
    background: -ms-linear-gradient(left, rgba(224,207,204,0) 0%, rgba(15,126,116,1) 100%);
    background: linear-gradient(to right, rgba(224,207,204,0) 0%, rgba(15,126,116,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0cfcc', endColorstr='#0f7e74', GradientType=1 );
  }

  &.loading {
    &:before {
      animation: loading 4s linear forwards;
    }
  }
  &.loaded {
    &:before {
      animation: loaded 0.1s 0.2s linear forwards;
    }
  }

  .navicon {
    float: right;
    width: 30px;
    height: 30px;
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
  background-image: url(http://7xr7xo.com1.z0.glb.clouddn.com/icon-github.png);
}
.photo {
  background-image: url(https://avatars0.githubusercontent.com/u/12905966?s=40&v=4);
}

  h1 {
    font-size: 1.4em;
    display: inline-block;
    text-transform: uppercase;
    vertical-align: middle;
    margin: 0;
  }
}
</style>
