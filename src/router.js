import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    base:process.env.BASE_URL,
    routes:[
        {
            path: "/",
            component: () => import("@/Layout"),
            children: [
                {
                    path: "/",
                    name: "Home",
                    component: () => import("@/components/Home")
                },
                {
                    path: "/about",
                    name: "About",
                    component: () => import("@/components/About"),
                },
                
            ]
        },
       
    ]
});
