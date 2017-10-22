<template>
  <div id='blogs'>
    <section v-if="!item.fork && excludedItems.indexOf(item.name) < 0" v-for='item in blogs'>
      <h2>
        <a v-bind:href='item.html_url'>{{item.name}}</a>
      </h2>
      <p>{{item.description}}</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: '',
      excludedItems: [
        "angular-app",
        "instant"
      ]
    }
  }
  ,
  methods: {
    getData(url) {
      this.$http .get(url) .then(response=> {
        this.$set(this._data, 'blogs', response.body)
      }
      , err=> {
        console.log(err)
      }
      )
    }
  }
  ,
  mounted() {
    this.getData("https://api.github.com/users/77Vincent/repos")
  }
}

</script><style lang="scss">@import "../assets/scss/meta";
#blogs {
  text-align: center;
}

</style>
