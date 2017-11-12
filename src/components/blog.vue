<template>
  <div>
    <div class="block-left">
      <article>
        <section>
          <vue-markdown v-show="0" @rendered="render" :source="blog.body"></vue-markdown>
          <div v-html="html"></div>
        </section>
      </article>

      <h2 id="comments">评论</h2>
      <div class="comments">
        <section v-for="item in comments">
          <p>{{item.body}}</p>
          
        </section>
      </div>
    </div>


    <div class="block-right">
      <section>
        <div class="title">{{blog.title}}</div>
        <span class="date">{{blog.updated_at}}更新</span>
        <span class="comments-number">{{blog.comments}}评论</span>
      </section>


      <!-- <div class="labels">
        <button :style="{backgroundColor: '#' + item.color}" v-for="item in blog.labels">{{item.name}}</button>
      </div> -->

      <section class="anchors">
        <a :href="`#${item.id}`" class="icon-caret-right anchor" v-for="item in index">{{item.text}}</a>
        <div><a class="button icon-comment" href="#comments">查看评论</a></div>
        <div><button class="icon-arrow-up" @click="gotoTop">回到顶部</button></div>
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
      blog: "",
      comments: "",
      html: "",
      index: "",
    };
  },
  methods: {
    render(result) {
      if (!result) return;

      this.index = result.match(titleRegex).map((item) => {
        let text = item.replace(textRegex, "");
        return {
          id: fn.stringToNumber(text),
          text: text
        };
      });

      this.html = fn.trimArray(result.split("<h2>"), 1).map((item, i) => {
        return `<h2 id="${this.index[i].id}">${item}`;
      }).join("");

      setTimeout(() => {
        Prism.highlightAll();
      }, 100);
    },
    gotoTop() {
      window.scrollTo(0, 0);
    }
  },
  created() {
    const params = this.$route.params;
    let commentsAPI;

    if (params.blog) {
      // When land on blog page via homepage
      this.blog = params.blog;
      commentsAPI = params.blog.comments_url;
    } else {
      // When directly land on a blog page
      const blogAPI = `https://api.github.com/repos/77Vincent/blog/issues/${params.id}`;
      commentsAPI = `https://api.github.com/repos/77Vincent/blog/issues/${params.id}/comments`;

      this.$http.get(blogAPI).then(res => {
        this.blog = res.data;
      }, err => {
        console.log(err);
      });
    }

    this.$http.get(commentsAPI).then(res => {
      this.comments = res.data;
    }, err => {
      console.log(err);
    });
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

.anchor {
  color: #000;
  font-size: 1.25em; 
  display: block;
  margin: 1em 0;
  letter-spacing: 0;

  &:before {
    opacity: 0.7;    
    margin-right: 7px;
  }
}

.comments {
  border: 1px solid $color-middlegray;
  border-radius: 7px;
  padding: 0 20px;
}
</style>