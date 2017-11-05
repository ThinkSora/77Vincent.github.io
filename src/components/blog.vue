<template>
  <div id="blog">
    <div class="icon-loading" v-show="loading"></div>

    <div class="breadcrumbs">
      <div class="labels">
        <span class="label" :style="{backgroundColor: '#' + item.color}" v-for="item in blog.labels">{{item.name}}</span>
      </div>

      <div class="info">
        <span>{{blog.title}}</span>
        <span>{{dateFormat(blog.updated_at)}}</span>
        <span>{{blog.comments}}评论</span>
      </div>
    </div>

    <div class="markdown">
      <vue-markdown :source="blog.body"></vue-markdown>
    </div>
  </div>
</template>

<script>
import fn from "../assets/fn.js";
import Prism from "Prismjs";
import VueMarkdown from "vue-markdown";

export default {
  components: {
    VueMarkdown
  },
  data() {
    return {
      loading: true,
      blog: ""
    };
  },
  methods: {
    dateFormat: fn.dateFormat,
  },
  mounted() {
    setTimeout(() => {
      Prism.highlightAll();
    }, 400);
    const url = `https://api.github.com/repos/77Vincent/blog/issues/${this.$route.params.id}`;

    this.$http.get(url).then(response => {
      this.$set(this.$data, "blog", response.data);
      this.$data.loading = false;
    }, err => {
      console.log(err);
    });
  }
}

</script>

<style lang="scss" scoped>
@import "../assets/meta";

</style>