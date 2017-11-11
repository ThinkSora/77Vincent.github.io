import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";

// Components
import App from "./components/app.vue";
import appAbout from "./components/about.vue";
import appBlogs from "./components/blogs.vue";
import appBlog from "./components/blog.vue";

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  hashbang: false,
  routes: [{
    path: "/",
    name: "blogs",
    component: appBlogs,
  }, {
    path: "/blog/:id",
    name: "blog",
    component: appBlog 
  }, {
    path: "/about",
    name: "about",
    component: appAbout
  }]
});

new Vue({
  el: "#app",
  router,
  components: {
    App
  } 
});
