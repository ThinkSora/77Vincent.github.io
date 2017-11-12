<template>
  <div>
    <div class="block-left">
      <article>
        <section>
          <vue-markdown v-show="0" @rendered="render" :source="blog.body"></vue-markdown>
          <div v-html="html"></div>
        </section>
      </article>

      <h2 class="text-1">评论</h2>
      <div id="comments">
        <div v-if="!comments.length" class="text-normal-gray">目前没有评论</div>

        <section class="comment clearfix" v-for="item in comments">
          <img :src="item.user.avatar_url" alt="user picture">

          <aside>
            <span class="text-2">{{item.user.login}} /</span>
            <span class="text-3">{{item.updated_at}}</span>
            <div class="content">{{item.body}}</div>
          </aside>
        </section>
      </div>
    </div>

    <div class="block-right">
      <section>
        <div class="text-2">{{blog.title}}</div>
        <span class="text-3">{{blog.updated_at}}更新</span>
        <span class="text-3">{{blog.comments}}评论</span>
      </section>

      <section class="anchors">
        <a :href="`#${item.id}`" class="icon-caret-right anchor" v-for="item in index">{{item.text}}</a>
      </section>

      <section>
        <div><a class="button" href="#comments">查看评论</a></div>
        <div><button @click="gotoTop">回到顶部</button></div>
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
        this.blog.updated_at = fn.formatDate(this.blog.updated_at);
      }, err => {
        console.log(err);
      });
    }

    this.$http.get(commentsAPI).then(res => {
      this.comments = res.data.map((item) => {
        item.updated_at = fn.formatDate(item.updated_at);
        return item;
      });
    }, err => {
      console.log(err);
    });
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/meta";
.block-right {
  section {
    padding-left: 20px;
    border-bottom: 1px solid $color-middlegray; 

    &:last-child {
      border-bottom: 0;
    }
  }
  .text-3 {
    padding-right: 5px;

    &:after {
      content: "/";
      display: inline;
      padding-left: 7px;
    }

    &:last-child:after {
      display: none;
    }
  }
}

.anchor {
  display: block;
  margin: 1em 0;
  letter-spacing: 0;

  &:before {
    opacity: 0.7;    
    margin-right: 7px;
  }
}

#comments {
  border-radius: 7px;

  .comment {
  }

  aside {
    float: left;
    padding: 15px;
    border: 1px solid $color-middlegray;
    border-radius: 5px;
  }

  .content {
    margin-top: 3px;
    border-top: 1px solid $color-middlegray;
    padding-top: 10px;
    font-size: $font-m;
  }

  img {
    border-radius: 5px;
    margin-right: 10px;
    width: 40px;
    height: auto;
    float: left;
  }
}
</style>