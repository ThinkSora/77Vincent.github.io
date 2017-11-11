<template>
  <div class="blogs">
    <div class="icon-spinner" v-show="loading"></div>

    <div class="block-left">
      <section v-show="item.show" v-for="item in blogs">
        <router-link :to="{name: 'blog', params: {id: item.id, content: item}}" class="blog">
          <span>{{item.updated_at}}</span>
          <h2>{{item.title}}</h2>
          <span class="">{{item.comments}}评论</span>
        </router-link>
      </section>
    </div>

    <div class="block-right">
      <section>
        <div class="filters-title">筛选</div>
        <div class="filters">
          <button 
            :class="{disabled: item.disabled}"
            :style="{backgroundColor: '#' + item.color}" 
            v-for="item in labels"
            @click="toggleLabels(item.id)"
          >{{item.name}}
          </button>
          <button @click="toggleLabels()">反选所有</button>
        </div>
      </section>

      <section>
        <div class="filters-title">排序</div>
        <div class="filters">
          <button v-on:click="filterByTime" class="icon-arrow-up" :class="{'icon-arrow-down': ascTime}">按时间</button>
          <button v-on:click="filterByComments" class="icon-arrow-up" :class="{'icon-arrow-down': ascComments}">按评论数</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import appBlog from "./blog.vue";
import fn from "../assets/fn.js";
import _ from "lodash";

export default {
  data() {
    return {
      blogs: "",
      labels: "",
      ascTime: 1,
      ascComments: 1,
      loading: 1 
    };
  },
  methods: {
    filterByTime: function () {
      let newList = this.blogs.sort((a, b) => {
        let tempA = a.updated_at;
        let tempB = b.updated_at;
        return this.ascTime 
          ? tempA.split("-").join("") - tempB.split("-").join("")
          : tempB.split("-").join("") - tempA.split("-").join("");
      });
      this.ascTime = !this.ascTime;
      this.blogs = newList;
    },
    filterByComments: function () {
      let newList = this.blogs.sort((a, b) => {
        return this.ascComments ? a.comments - b.comments : b.comments - a.comments
      });
      this.ascComments = !this.ascComments;
      this.blogs = newList;
    },
    toggleBlogs: function () {
      let disabledList = this.labels.map((item) => {
        return item.disabled ? item.name : undefined;
      });

      // Check blogs visibility
      this.blogs.map((blog) => {
        blog.show = !_.isEqual(_.intersection(blog.labelsList, disabledList), blog.labelsList);
      });
    },
    toggleLabels: function (id) {
      let newList = this.labels.map((item) => {
        item.disabled = item.id === id ? !item.disabled : item.disabled;

        // When clicking on a non-label button
        item.disabled = !id ? !item.disabled : item.disabled;
        return item;
      });
      this.$set(this.$data, "labels", newList);
    }
  },
  watch: {
    labels: function () {
      this.toggleBlogs();
    }
  },
  mounted() {
    const blogsAPI = "https://api.github.com/repos/77Vincent/blog/issues";
    const labelsAPI = "https://api.github.com/repos/77Vincent/blog/labels";

    // GET blogs 
    this.$http.get(blogsAPI).then(res => {

      // Process data and assign
      this.blogs = res.data.map((blog) => {
        blog.labelsList = blog.labels.map((label) => {
          return label.name;
        });
        blog.updated_at = fn.formatDate(blog.updated_at);
        return blog;
      });

      // GET labels
      this.$http.get(labelsAPI).then(res => {

        // Process data and assign
        this.labels = res.data.map((item) => {
          item.disabled = false;
          return item;
        });
      }, err => {
        console.log(err);
      });

      this.loading = !this.loading;
    }, err => {
      console.log(err);
    });
  }
}

</script>

<style lang="scss" scoped>
@import "../assets/meta";

.blogs {
  font-family: monospace;
}

.filters-title {
  border-bottom: 1px solid $color-middlegray;
  margin-bottom: 15px;
  padding-bottom: 6px;
  padding-left: 20px;
}

.filters {
  padding-left: 20px;
}

.blog {
  display: flex;
  align-items: center;

  span {
    font-size: $font-s;
    opacity: 0.8;
    color: $color-darkgray;

    &:first-child {
      flex: 5;
      padding-right: 15px;
      margin-right: 15px;
      border-right: 1px solid $color-gray;
      max-width: 100px;
    }

    &:last-child {
      flex: 3;
      max-width: 50px;
    }
  }

  h2 {
    font-size: $font-l;
    margin: 0;
    flex: 20;

    @include transition(letter-spacing, 0.3s);
    &:hover {
      letter-spacing: 0.3em;
    }
  }
}
</style>
