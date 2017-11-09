<template>
  <div class="blog">
    <div class="icon-loading icon-spinner" v-show="loading"></div>

    <div class="breadcrumbs">
      <div class="labels">
        标签： <button :style="{backgroundColor: '#' + item.color}" v-for="item in blog.labels">{{item.name}}</button>
      </div>

      <div class="info">
        <span>{{blog.title}}</span>
        <span>{{formatDate(blog.updated_at)}}</span>
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
    formatDate: fn.formatDate,
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
.blog {
  padding-top: 30px;
}

.labels {
  button {
    display: inline;
  }
}

</style>