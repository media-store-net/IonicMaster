import { IonicVueRouter } from "@ionic/vue";

const router = new IonicVueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      name: "Home",
      component: () => import(/* webpackChunkName: "Home" */ "@/pages/Home"),
    },
    {
      path: "/sclad",
      name: "Sclad",
      component: () =>
        import(/* webpackChunkName: "OrderDetails" */ "@/pages/Sclad"),
    },
    {
      path: "/settings",
      name: "Settings",
      component: () =>
        import(/* webpackChunkName: "Settings" */ "@/pages/Settings"),
    },
  ],
});

export default router;
