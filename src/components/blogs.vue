<template>
  <div id="blogs">
    <div class="icon-loading icon-spinner" v-show="loading"></div>

    <section v-for="item in blogs">
      <router-link :to="{name: 'blog', params: {id: item.number}}" class="blogs-link">
        <span>{{dateFormat(item.updated_at)}}</span>
        <h2>{{item.title}}</h2>
        <span class="">{{item.comments}}评论</span>
      </router-link>
    </section>
  </div>
</template>

<script>
import fn from "../assets/fn.js";
export default {
  data() {
    return {
      loading: true,
      blogs: ""
    };
  },
  methods: {
    dateFormat: fn.dateFormat
  },
  mounted() {
    const url = "https://api.github.com/repos/77Vincent/blog/issues";

    // fetch all blogs from gibhub API 
    this.$http.get(url).then(response => {
      this.$set(this.$data, "blogs", response.data);
      this.$data.loading = false;
    }, err => {
      console.log(err);
    });
  }
}

</script>

<style lang="scss" scoped>
@import "../assets/meta";

#blogs {
  font-family: monospace;

  .blogs-link {
    display: block;

    span {
      display: inline-block;
      vertical-align: middle;
      font-size: $font-s;

      &:first-child {
        color: $color-darkgray;
        padding-right: 15px;
        margin-right: 10px;
        border-right: 1px solid $color-darkgray;
      }
    }

    h2 {
      font-size: $font-l;
      display: inline-block;
      width: 500px;
    }
  }
}

</style>
