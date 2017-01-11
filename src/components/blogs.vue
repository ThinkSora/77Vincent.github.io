<template>
    <div id="blogs">
        <section v-for="item in blogs">
            <router-link v-bind:to="item.href"><h2>{{item.title}}</h2></router-link>
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

    section {
        margin: 3em 0;

        h2 {
            margin: 0.3em 0;
            @include transition(letter-spacing, 0.3s);

            &:hover {
                letter-spacing: 0.3em;
            }
        }
    }
}

</style>
