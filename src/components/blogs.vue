<template>
  <div class="blogs clearfix">
    <div class="icon-loading icon-spinner" v-show="loading"></div>

    <div class="content">
      <section v-show="item.show" v-for="item in blogs">
        <router-link :to="{name: 'blog', params: {id: item.number}}" class="blogs-link">
          <span>{{dateFormat(item.updated_at)}}</span>
          <h2>{{item.title}}</h2>
          <span class="">{{item.comments}}评论</span>
        </router-link>
      </section>
    </div>

    <div class="filters">
      <section>
        <div class="filter">筛选:</div>
        <button 
          class="label" 
          v-bind:class="{disabled: item.disabled}"
          :style="{backgroundColor: '#' + item.color}" 
          v-for="item in labels"
          @click="toggle(item.id)"
         >{{item.name}}
         </button>
        <button @click="toggleAll">所有</button>
      </section>
      <section>
        <div class="filter">排序:</div>
        <button v-on:click="filterByTime">按时间</button>
        <button v-on:click="filterByComments">按评论数</button>
      </section>
    </div>
  </div>
</template>

<script>
import fn from "../assets/fn.js";
export default {
  data() {
    return {
      loading: true,
      blogs: "",
      labels: "",
      filterByLabels: ""
    };
  },
  methods: {
    filterByTime: function() {
    },
    filterByComments: function() {
    },
    toggleBlog: function() {
      let disabledList = this.labels.map((item) => {
        if (item.disabled) {
          return item.name;
        }
      });

      this.blogs.map((blog) => {
        let show = 0;
        blog.labelsList.map((item) => {
          if (disabledList.indexOf(item) == -1) {
            show++
          } else {
            show--
          }
        });
        if (show > 0) {
          blog.show = true;
        } else {
          blog.show = false;
        }
      });
    },
    toggle: function(id) {
      let newLabels = this.labels.map((item) => {
        if (item.id === id) {
          item.disabled = !item.disabled;
        }
        return item;
      });
      this.$set(this.$data, "labels", newLabels);
      this.toggleBlog();
    },
    toggleAll: function() {
      let newLabels = this.labels.map((item) => {
        item.disabled = false;
        return item;
      });
      this.$set(this.$data, "labels", newLabels);
      this.toggleBlog();
    },
    dateFormat: fn.dateFormat
  },
  mounted() {
    const issuesAPI = "https://api.github.com/repos/77Vincent/blog/issues";
    const labelsAPI = "https://api.github.com/repos/77Vincent/blog/labels";

    this.$http.get(issuesAPI).then(res => {
      this.blogs = res.data;
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
        this.toggleBlog();
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
}

.filter {
  border-bottom: 1px solid $color-middlegray;
  margin-bottom: 10px;
  padding-bottom: 6px;
}

section {
  margin: 1.6em 0;

  &:first-child {
    margin-top: 0;
  }
}

.content {
  float: left;
  width: 80%;
  border-right: 1px solid $color-middlegray;
}

.disabled {
  background-color: $color-middlegray !important;
  opacity: 0.4;
}

.filters {
  float: right;
  width: 20%;
  padding-left: 20px;
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
