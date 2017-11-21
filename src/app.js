import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Vuex from "vuex";

// Components
import App from "./components/app.vue";
import appAbout from "./components/about.vue";
import appBlogs from "./components/blogs.vue";
import appBlog from "./components/blog.vue";

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    visit: 0,
    loading: 1 
  },
  mutations: {
    visit: state => state.visit = 1,
    loaded: state => state.loading = 0
  }
});

const router = new VueRouter({
  mode: "history",
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
  store,
  components: {
    App
  } 
});
