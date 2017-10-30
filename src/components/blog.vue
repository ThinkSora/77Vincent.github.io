<template>
  <div id="blog">
    <div class="icon-loading" v-show="loading"></div>
    <vue-markdown :source="blog"></vue-markdown>
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

  }
}

</script>

<style lang="scss">
@import "../assets/scss/meta";

#blogs {
  text-align: center;
}

</style>