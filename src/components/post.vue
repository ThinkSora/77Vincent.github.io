<template>
    <div id="post">
        {{$route.params.id}}
    </div>
</template>

<script>
export default {
    data () {
        return {
            post: ''
        }
    },
    methods: {
    },
    created () {
    }
}
</script>

<style lang="scss">
@import "../assets/scss/meta";

#post {

}

</style>
