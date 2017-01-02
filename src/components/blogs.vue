<template>
    <div id="blogs">
        <section v-for="item in blogs">
            <a href=""><h2>{{item.title}}</h2></a>
            <p>{{item.content}}</p>
       </section>
    </div>
</template>

<script>
export default {
    data () {
        return {
            blogs: [
                {
                    title: 'Vinslider',
                    content: 'A homemade slider module written in native Javascript'
                },
                {
                    title: 'Scaffold.css',
                    content: 'A homemade slider module written in native Javascript'
                },
                {
                    title: 'Properly manage your events',
                    content: 'A homemade slider module written in native Javascript'
                },
                {
                    title: 'Vinslider',
                    content: 'A homemade slider module written in native Javascript'
                },
                {
                    title: 'Scaffold.css',
                    content: 'A homemade slider module written in native Javascript'
                },
                {
                    title: 'Properly manage your events',
                    content: 'A homemade slider module written in native Javascript'
                }
            ] 
        }
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
