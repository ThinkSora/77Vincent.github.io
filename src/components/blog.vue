<template>
  <div id="blog">
    <div class="icon-loading" v-show="loading"></div>

    <div class="markdown">
      <vue-markdown :source="blog"></vue-markdown>
    </div>
  </div>
</template>

<script>
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
  mounted() {
    const url = `https://api.github.com/repos/77Vincent/blog/issues/${this.$route.params.id}`;

    this.$http.get(url).then(response => {
      console.log(response.data)
      this.$set(this.$data, "blog", response.data.body);
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