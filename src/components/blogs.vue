<template>
  <div id="blogs">
    <div class="icon-loading" v-show="loading"></div>

    <section v-for="item in blogs">
      <router-link :to="{name: 'blog', params: {id: item.number}}" class="blogs-link">
        <span>{{dateFormat(item.updated_at)}}</span>
        <h2>{{item.title}}</h2>
        <span>评论数: {{item.comments}}</span>
      </router-link>
    </section>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      loading: true,
      blogs: ""
    };
  },
  methods: {
    dateFormat(dateString) {
      return moment().calendar(dateString, {
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        lastDay: '[Yesterday]',
        lastWeek: '[Last] dddd',
        sameElse: 'DD/MM/YYYY'
      });
    }
  },
  mounted() {
    const url = "https://api.github.com/repos/77Vincent/blog/issues";

    this.$http.get(url).then(response => {

      this.$set(this.$data, "blogs", response.data);
      this.$data.loading = false;
    }, err => {
      console.log(err);
    });
  }
}

</script>

<style lang="scss" scoped>
@import "../assets/meta";

#blogs {

  .blogs-link {
    display: block;

    span {
      display: inline-block;
      vertical-align: middle;

      &:first-child {
        color: $color-darkgray;
        font-size: 12px;
        padding-right: 20px;
        margin-right: 20px;
        border-right: 1px solid $color-darkgray;
      }
    }

    h2 {
      font-size: 18px;
      display: inline-block;
      width: 500px;
    }
  }
}

</style>
