import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/useAuthStore'
import { useNavStore } from '../stores/useNavStore'

import Home from '../views/Home.vue'
import AccessDenied from '../views/AccessDenied.vue'
import Login from '../views/Login.vue'
import MasterRecords from '../views/master/MasterRecords.vue'
import SupplierList from '../views/master/supplier/SupplierList.vue'
import SupplierShow from '../views/master/supplier/SupplierShow.vue'
import Supplier from '../views/master/supplier/Supplier.vue'
import Contractors from '../views/master/Contractors.vue'

import masterRecord from '../menus/masterRecord'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home', 
      component: Home,
      meta: { requiresAuth: true, menu: {  groupName: "MAIN MENU", links: []  } }
    },
    {
      path: '/403',
      name: 'AccessDenied', 
      component: AccessDenied,
      meta: { requiresAuth: true, menu: null }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresAuth: false, menu: null }
    },
    {
      path: '/masterrecords',
      name: 'masterrecords',
      title: 'Dashboard',
      component: MasterRecords,
      meta: { requiresAuth: true, menu: masterRecord }
    },
    {
      path: '/suppliers',
      name: 'suppliers',
      component: SupplierList,
      meta: { requiresAuth: true, menu: masterRecord }
    },
    {
      path: '/supplierstest',
      name: 'supplierstest',
      component: Supplier,
      meta: { requiresAuth: true, menu: masterRecord }
    },
    {
      path: '/suppliers/:id',
      name: 'suppliershow',
      component: SupplierShow,
      meta: { requiresAuth: true, menu: masterRecord }
    },
    {
      path: '/contractors',
      name: 'contractors',
      component: Contractors,
      meta: { requiresAuth: true, menu: masterRecord }
    }

  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const nav = useNavStore()

  if ((to.meta.requiresAuth && !authStore.user)) {
    authStore.logout
    next('/login')
  } else if(authStore.user && to.path === "/login"){
    next('/')
  } else if (to.meta.requiredPermissions && !authStore.hasPermissions(to.meta.requiredPermissions)) {
    next('/403') 
  } else {
      if(to.meta.menu) {
        console.log()
        nav.setTopBarMenu(to.meta.menu.groupName, to.meta.menu.links)
      } else {
        nav.setTopBarMenu("", [])
      }
      console.log(to.name, to.path)
      next()
  }
})

export default router
