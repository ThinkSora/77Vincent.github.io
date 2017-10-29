<template>
  <div id="blogs">
    <div class="icon-loading" v-show="loading"></div>
    <vue-markdown :source="blogs"></vue-markdown>

    <!-- <section v-if="!item.fork && excludedItems.indexOf(item.name) < 0" v-for="item in blogs">
      <h2>
        <a v-bind:href="item.html_url">{{item.name}}</a>
      </h2>
      <p>{{item.description}}</p>
    </section> -->
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
      blogs: "",
      excludedItems: [
        "angular-app",
        "instant"
      ]
    };
  },
  methods: {
    getData(url) {
      this.$http.get(url).then(response => {

        // process the markdown text
        let data = response.body
          .replace("github.com", "api.github.com/repos");

        this.$set(this.$data, "blogs", data);
        this.$data.loading = false;
      }, err => {
        console.log(err);
      });
    }
  },
  mounted() {
    this.getData("https://raw.githubusercontent.com/77Vincent/blog/master/README.md");
  }
}

</script>

<style lang="scss">
@import "../assets/scss/meta";

#blogs {
  text-align: center;
}

</style>
