import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

// Components
import App from './components/App.vue'
import About from './components/about.vue'
import Blogs from './components/blogs.vue'
import Post from './components/post.vue'

Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Blogs 
    },
    {
        path: '/about',
        component: About 
    },
    {
        path: '/blogs',
        component: Blogs 
    },
    {
        path: '/post/:id',
        component: Post 
    }
]
const router = new VueRouter({
    routes,
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

