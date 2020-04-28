import {IonicVueRouter} from '@ionic/vue';

const router = new IonicVueRouter({
	routes: [
		{ path: "/", redirect: "/home" },
		{
			path: "/home",
			name: "Home",
			component: () =>
				import(/* webpackChunkName: "Home" */ "@/pages/Home"),
		},
		{
			path: "/orderDetails",
			name: "OrderDetails",
			component: () =>
				import(/* webpackChunkName: "OrderDetails" */ "@/pages/OrderDetails"),
		},
		{
			path: "/settings",
			name: "Settings",
			component: () =>
				import(/* webpackChunkName: "Settings" */ "@/pages/Settings"),
		}
	]
});

export default router;
