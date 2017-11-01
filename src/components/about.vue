<template>
  <div id="about">
    <section v-for="item in about" v-bind:class="item.label">
      <h2>{{item.section}}</h2>
      <a v-bind:href="subitem.href" v-bind:class="subitem.title" v-for="subitem in item.content">{{subitem.title}}</a>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about: ''
    };
  },
  methods: {
    getData(url) {
      this.$http
        .get(url)
        .then(response => {
          this.$set(this._data, 'about', response.body);
        }, err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData('/src/data/about.json');
  }
}
</script>

<style lang="scss">
@import "../assets/meta";

#about {
  text-align: center;
  a {
    display: block;
  }
  section {
    &.contact {
      a {
        text-indent: 9999em;
        overflow: hidden;
        display: inline-block;
        width: 30px;
        height: 30px;
        background-size: contain;
        background-repeat: no-repeat;
        margin: 0 1em;
        @include transition(transform, 1s);
        &:hover {
          @include transform-rotate(360deg);
        }
        &.github {
          background-image: url(http://7xr7xo.com1.z0.glb.clouddn.com/icon-github.png);
        }
        &.email {
          background-image: url(http://7xr7xo.com1.z0.glb.clouddn.com/icon-email.png);
        }
        &.linkedin {
          background-image: url(http://7xr7xo.com1.z0.glb.clouddn.com/icon-linkedin.png);
        }
      }
    }
  }
}
</style>
