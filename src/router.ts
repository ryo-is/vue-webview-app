import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/Home.vue";
import UserSetting from "./views/userSetting/UserSetting.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/userSetting",
      name: "UserSetting",
      component: UserSetting,
    }
  ],
});
