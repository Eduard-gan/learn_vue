import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Users from "@/views/Users.vue";
import AddUser from "@/views/Add.vue";

Vue.use(Router);

export default new Router({
  mode: "history", // by default does not exist in config
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/users",
      name: "users",
      component: Users
    },
    {
      path: "/add",
      name: "add",
      component: AddUser
    }
  ]
});
