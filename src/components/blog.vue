<template>
  <div>
    <article class="block-left">
      <section>
        <vue-markdown v-show="0" @rendered="render" :source="blog.body"></vue-markdown>
        <div v-html="html"></div>
      </section>
    </article>

    <div class="block-right">
      <section>
        <div class="title">{{blog.title}}</div>
      </section>

      <section>
        <span class="date">{{blog.updated_at}}</span>
        <span class="comments">{{blog.comments}}评论</span>

        <div class="labels">
          <button :style="{backgroundColor: '#' + item.color}" v-for="item in blog.labels">{{item.name}}</button>
        </div>
      </section>

      <section>
        <a :href="`#${item.id}`" class="anchor" v-for="item in index"><span>> </span>{{item.text}}</a>
      </section>
    </div>
  </div>
</template>

<script>
import fn from "../assets/fn.js";
import Prism from "Prismjs";
import VueMarkdown from "vue-markdown";

const titleRegex = /<h2>.*<\/h2>/g;
const textRegex = /<h2>|<\/h2>/g;

export default {
  components: {
    VueMarkdown
  },
  data() {
    return {
      html: "",
      blog: this.$route.params.blog,
      index: "",
    };
  },
  methods: {
    render(result) {

      this.index = result.match(titleRegex).map((item) => {
        let text = item.replace(textRegex, "");
        return {
          id: fn.stringToNumber(text),
          text: text
        };
      });

      let resultArr = result.split("<h2>");
      this.html = resultArr.slice(1, resultArr.length).map((item, i) => {
        return `<h2 id="${this.index[i].id}">${item}`;
      }).join("");

      setTimeout(() => {
        Prism.highlightAll();
      }, 100);
    }
  },
  mounted() {
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

.block-right {
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
</style>