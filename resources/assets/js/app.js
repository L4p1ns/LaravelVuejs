require('./bootstrap');

window.Vue = require('vue');


import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//déclaration des composants
let Myheader = require('./components/Myheader.vue');
let Myfooter = require('./components/Myfooter.vue');

let Home = require('./components/Home.vue');
let About = require('./components/About.vue');


//Creer les routes
const routes = [
	{path: '/home', component: Home},
	{path: '/about', component: About}
]
const router = new VueRouter({
	//mode:'history', //Pour eliminer le # au niveau du /#about
	routes
})

const app = new Vue({
    el: '#app',
    router,
    components:{Myheader, Myfooter}
});
