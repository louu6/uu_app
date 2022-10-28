import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

Vue.use(VueRouter)

//重写push和replace方法
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location,resolve,reject){
  if(resolve&&reject){
    originPush.call(this,location,resolve,reject)
  }else{
    originPush.call(this,location,()=>{},()=>{})
  }
}
VueRouter.prototype.replace = function(location,resolve,reject){
  if(resolve&&reject){
    originReplace.call(this,location,resolve,reject)
  }else{
    originReplace.call(this,location,()=>{},()=>{})
  }
}

export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home,
      meta:{
        show:true,//Footer组件的显示与隐藏
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        show:true,//Footer组件的显示与隐藏
      }
    },
    {
      path:'/login',
      component:Login,
      meta:{
        show:false,//Footer组件的显示与隐藏
      }
    },
    {
      path:'/register',
      component:Register,
      meta:{
        show:false,//Footer组件的显示与隐藏
      }
    },
    // 重定向，默认进入到网站主页
    {
      path:'/',
      redirect:'/home'
    }
  ]
})