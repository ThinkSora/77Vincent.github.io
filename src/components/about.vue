<template>
    <div id="about">
        <pre>AboutMe: {{about}}</pre>
    </div>
</template>

<script>
export default {
    data () {
        return {
            about: ''
        }
    },
    methods: {
        getData (url) {
            this.$http
                .get(url)
                .then(response => {
                    this.$set(this._data, 'about', response.body)
                }, err => {
                    console.log(err)
                })
        }
    },
    mounted () {
        this.getData('/src/data/about.json') 
    }
}
</script>

<style lang="scss">
@import "../assets/scss/meta";

#about {
    pre {
        line-height: 2;
    }
}

</style>
