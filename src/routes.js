import Dashboard from './components/Dashboard.vue'
import DashboardIndex from './components/modules/dashboard/Index.vue'
import NotFound from './components/modules/dashboard/404.vue'

import SelectTable from './components/modules/tables/SelectTable.vue'

// Form
import Login from './components/Login.vue'
import NotFoundSecond from './components/modules/dashboard/500.vue'

// Routes
const routes = [
  {
    path: '/',
    component: Dashboard,
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      document.body.className += 'skin-light sidebar-mini'
      next()
    },
    activate: function () {
      this.$nextTick(function () {
        // => 'DOM loaded and ready'
        alert('test')
      })
    },
    children: [
      {
        path: '',
        name: 'dashboard',
        component: DashboardIndex
      }, {
        path: '/login',
        name: 'login',
        component: Login
      }, {
        path: '/dashboard',
        name: 'dashboard-first',
        component: DashboardIndex
      }, {
        path: '/select-table',
        name: 'select-table',
        component: SelectTable
      }, {
        path: '/404',
        name: '404-eror',
        component: NotFound
      }, {
        path: '/500',
        name: '500',
        component: NotFoundSecond
      }, {
        path: '*',
        name: '404',
        component: NotFound
      }
    ]
  }
]

export default routes
