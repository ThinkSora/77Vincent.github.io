<template>
  <div id="blogs">
    <div class="icon-loading" v-show="loading"></div>

    <section v-for="item in blogs">
      <router-link :to="{path: 'blog', params: {id: item.number}}">
        <h2>{{item.title}}</h2>
      </router-link>
      <div class="blogs-info">
        <span>上次编辑: {{dateFormat(item.updated_at)}}</span>
        <span>评论数: {{item.comments}}</span>
      </div>
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
    },
    getData(url) {
      this.$http.get(url).then(response => {

        this.$set(this.$data, "blogs", response.data);
        this.$data.loading = false;
      }, err => {
        console.log(err);
      });
    }
  },
  mounted() {
    this.getData("https://api.github.com/repos/77Vincent/blog/issues");
  }
}

</script>

<style lang="scss">
@import "../assets/scss/meta";

#blogs {
  text-align: center;

  .blogs-info {
    font-size: 11px;

    span {
      margin: 0 10px;
    }
  }
}

</style>
