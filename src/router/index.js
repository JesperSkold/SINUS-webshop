import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ApparelView from '../views/ApparelView.vue'
import Account from '../views/AccountView.vue'
import Checkout from '../views/CheckoutView.vue'
import SignupView from '../components/CreateAccount.vue'
import LoginView from '../views/LogInView.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/products/:category',
    name: 'Products',
    component: ProductsView
  },
  {
    path: "/apparel",
    name: "Apparel",
    component: ApparelView,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignupView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
