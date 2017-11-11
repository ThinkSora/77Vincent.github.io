<template>
  <div class="blog" :class="{fixed: fixed}">
    <div class="icon-spinner" v-show="loading"></div>

    <article class="section-left">
      <section>
        <vue-markdown v-show="false" @rendered="render" :source="blog.body"></vue-markdown>
        <div v-html="markdown"></div>
      </section>
    </article>

    <div class="section-right">
      <section>
        <div class="title">{{blog.title}}</div>
      </section>

      <section>
        <span class="date">{{formatDate(blog.updated_at)}}</span>
        <span class="comments">{{blog.comments}}评论</span>

        <div class="labels">
          <button :style="{backgroundColor: '#' + item.color}" v-for="item in blog.labels">{{item.name}}</button>
        </div>
      </section>

      <section>
        <div v-for="item in content">{{item.name}}</div>
      </section>
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
      markdown: "",
      blog: "",
      content: "",
      fixed: false 
    };
  },
  methods: {
    render(result) {
      this.markdown = result;
      setTimeout(() => {
        Prism.highlightAll();
      }, 100);

      // Render table content 
      this.content = result;
    },
    formatDate: fn.formatDate,
  },
  mounted() {
    setTimeout(() => {
    }, 400);
    const url = `https://api.github.com/repos/77Vincent/blog/issues/${this.$route.params.id}`;

    this.$http.get(url).then(res => {
      this.blog = res.data;
      this.$data.loading = false;
    }, err => {
      console.log(err);
    });

    window.onscroll = () => this.fixed = window.pageYOffset > 65 ? true : false;
  }
}

</script>

<style lang="scss" scoped>
@import "../assets/meta";
.title {
  font-weight: bold;
  padding-bottom: 6px;
  font-size: 1.2em;
}

.labels {
  margin-top: 5px;
}

button {
  display: inline;
}

.date {
  padding-right: 5px;

  &:after {
    content: "/";
    display: inline;
    padding-left: 7px;
  }
}

.section-right {
  font-size: $font-s;

  section {
    padding-left: 20px;
    border-bottom: 1px solid $color-middlegray; 

    &:last-child {
      border-bottom: 0;
    }
  }

  span {
    color: $color-darkgray;
    opacity: 0.8;
  }
}

.fixed {
  position: relative;

  .section-right {
    position: fixed;
    top: 0;
    right: 0;
  }
}
</style>