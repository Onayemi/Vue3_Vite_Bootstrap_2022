import { createRouter, createWebHistory } from "vue-router";
// admin
import Dashboard from '../views/admin/Dashboard.vue'
import Profile from '../views/admin/Profile.vue'
import Settings from '../views/admin/Settings.vue'
// pages
import HomePage from '../views/Home.vue'
import LoginPage from '../views/auth/Login.vue'
import RegisterPage from '../views/auth/Register.vue'
import notFound from  '../views/notFound.vue'

const routes = [
	{ 
		path: '/admin/dashboard', name: 'Dashboard', component: Dashboard,
		meta: {
			requiresAuth: true
		}
	},
	{ 
		path: '/admin/Profile', name: 'Profile', component: Profile,
		meta: {
			requiresAuth: true
		}
	},
	{ 
		path: '/admin/Settings', name: 'Settings', component: Settings,
		meta: {
			requiresAuth: true
		}
	},
	{ 
		path: '/login',	name: 'Login', component: LoginPage,
		meta: {
			requiresAuth: false
		}
	},
	{ 
		path: '/register', name: 'Register', component: RegisterPage,
		meta: {
			requiresAuth: false
		}
	},
	{ path: '/', name: 'Home', component: HomePage,
		meta: {
			requiresAuth: false
		}
	},
	{ path: '/:pathMatch(.*)*', name: 'notFound', component: notFound },
]

const router = createRouter({
	history: createWebHistory(), //process.env.BASE_URL
	routes
})

router.beforeEach((to, from) => {
	if(to.meta.requiresAuth && !localStorage.getItem('token')){
		return { name: 'Login' }
	}

	if(to.meta.requiresAuth === false && localStorage.getItem('token')){
		return { name: 'Dashboard' }
	}
})

export default router