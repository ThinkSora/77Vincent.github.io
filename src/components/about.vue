<template>
  <section class="about">
    <div class="profile-photo"></div>
    <div class="info">
      <h2>{{info.name}}</h2>
      <p>{{info.location}}</p>
      <p>{{info.bio}}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      info: "" 
    };
  },
  methods: {
    getData(url) {
    }
  },
  mounted() {
    const profileAPI = "https://api.github.com/users/77Vincent";

    this.$http
      .get(profileAPI)
      .then(res => {
        this.info = res.data;
      }, err => {
        console.log(err);
      });
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/meta";
.about {
  text-align: center;
  padding-top: 30px;
  width: 100%;
}

.profile-photo {
  border-radius: 50%;
  background-image: url(https://avatars2.githubusercontent.com/u/12905966?v=4);
  background-size: cover;
  width: 100px;
  height: 100px;
  margin: 0 auto;
}

.info {
  p {
    margin: 0.5em 0;
  }
}

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
}

.github {
  background-image: url(http://7xr7xo.com1.z0.glb.clouddn.com/icon-github.png);
}
.linkedin {
  background-image: url(http://7xr7xo.com1.z0.glb.clouddn.com/icon-linkedin.png);
}
</style>
