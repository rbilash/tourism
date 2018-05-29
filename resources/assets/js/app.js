
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import Vuex from "vuex";
import BootstrapVue from 'bootstrap-vue';
import VueProgressBar from 'vue-progressbar'
import VueGeolocation from 'vue-browser-geolocation';
import VeeValidate from 'vee-validate';

import TravelApp from './components/TravelApp.vue';
import routes from './routes';
import travelStore from './travelStore';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.use(VueGeolocation);
Vue.use(VeeValidate, {
    events: ''
});

Vue.use(VueProgressBar, {
    color: '#4285F4',
    failedColor: '#FFFFFF',
    thickness: '3px',
    transition: {
        speed: '0.5s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
});

const router = new VueRouter({
    routes
});

// lets have event bus for messages.
window.events = new Vue();
window.flash = function(message, type = 'success') {
    window.events.$emit('flash', message, type);
};



new Vue({
    el: '#app',
    render: h => h(TravelApp),
    router,
    store: travelStore,
});

/*
const app = new Vue({
    router,
    store: travelStore,
}).$mount('#app')
*/
