<template>
    <div id='blogs'>
        <section v-for='item in blogs'>
            <h2>
                <router-link v-if='item.internal === "true"' v-bind:to='item.href'>{{item.title}}</router-link>
                <a v-else v-bind:href='item.href'>{{item.title}}</a>
            </h2>
            <p>{{item.content}}</p>
       </section>
    </div>
</template>

<script>
export default {
    data () {
        return {
            blogs: ''
        }
    },
    methods: {
        getData (url) {
            this.$http
                .get(url)
                .then(response => {
                    this.$set(this._data, 'blogs', response.body)
                }, err => {
                    console.log(err)
                })
        }
    },
    mounted () {
        this.getData('/src/data/blogs.json') 
    }
}
</script>

<style lang="scss">
@import "../assets/scss/meta";

#blogs {
    text-align: center;
}

</style>
