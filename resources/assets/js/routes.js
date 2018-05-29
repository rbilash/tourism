import Home from './components/Home.vue'
import CreateTraveller from './components/CreateTraveller.vue'
import ListTravellers from './components/ListTravellers.vue'
import Success from './components/Success.vue'

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/list', component: ListTravellers, name: 'list' },
    { path: '/add', component: CreateTraveller, name: 'create' },
    { path: '/success', component: Success, name: 'success' },
];

export default routes;