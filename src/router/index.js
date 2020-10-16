import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
 
const routes=[
    {
        path:"/login",
        component: ()=>import('../view/Login')
    },
    {
        path:"",
        redirect: "/login"
    }
]
const router = new VueRouter({
    routes,
    mode:"history"
})
export default router

