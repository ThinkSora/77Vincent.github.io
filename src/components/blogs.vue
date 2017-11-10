<template>
  <div class="blogs clearfix">
    <div class="icon-loading icon-spinner" v-show="loading"></div>

    <div class="content">
      <section v-show="item.show" v-for="item in blogs">
        <router-link :to="{name: 'blog', params: {id: item.number}}" class="blogs-link">
          <span>{{formatDate(item.updated_at)}}</span>
          <h2>{{item.title}}</h2>
          <span class="">{{item.comments}}评论</span>
        </router-link>
      </section>
    </div>

    <div class="filters-section">
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
import fn from "../assets/fn.js";
import _ from "lodash";

export default {
  data() {
    return {
      loading: true,
      ascTime: true,
      ascComments: true,
      blogs: "",
      labels: "",
      filterByLabels: ""
    };
  },
  methods: {
    filterByTime: function () {
      let newList = this.blogs.sort((a, b) => {
        return this.ascTime ? this.compareDate(a.updated_at, b.updated_at) : this.compareDate(b.updated_at, a.updated_at);
      });
      this.ascTime = !this.ascTime;
      this.$set(this.$data, "blogs", newList);
    },
    filterByComments: function () {
      let newList = this.blogs.sort((a, b) => {
        return this.ascComments ? a.comments - b.comments : b.comments - a.comments
      });
      this.ascComments = !this.ascComments;
      this.$set(this.$data, "blogs", newList);
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
    },
    compareDate: function (a, b) {
      return this.formatDate(a).split("-").join("") - this.formatDate(b).split("-").join("");
    },
    formatDate: fn.formatDate
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
      this.blogs = res.data;

      // Set a single dimension arrary of labels for each blog
      this.blogs.map((blog) => {
        blog.labelsList = blog.labels.map((label) => {
          return label.name;
        });
      });

      // GET labels
      this.$http.get(labelsAPI).then(res => {
        this.labels = res.data;

        // Set all labels to show
        this.labels.map((item) => {
          item.disabled = false;
        });
      }, err => {
        console.log(err);
      });

      this.loading = false;
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
  margin-top: -30px;
  margin-bottom: -65px;
}

section {
  margin: 1.6em 0;
}

.content {
  float: left;
  width: 80%;
  height: 92vh;
  border-right: 1px solid $color-middlegray;
}

.filters-section {
  float: right;
  width: 20%;

  .filters-title {
    border-bottom: 1px solid $color-middlegray;
    margin-bottom: 15px;
    padding-bottom: 6px;
    padding-left: 15px;
  }

  .filters {
    padding-left: 15px;
  }
}

.blogs-link {
  display: block;

  span {
    display: inline-block;
    vertical-align: middle;
    font-size: $font-s;

    &:first-child {
      color: $color-darkgray;
      padding-right: 15px;
      margin-right: 10px;
      border-right: 1px solid $color-darkgray;
    }
  }

  h2 {
    font-size: $font-l;
    display: inline-block;
    vertical-align: middle;
    width: 450px;
    margin: 0;

    @include transition(letter-spacing, 0.3s);
    &:hover {
      letter-spacing: 0.3em;
    }
  }
}

</style>
