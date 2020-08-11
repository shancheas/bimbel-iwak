import Vue from 'vue'
import Router from 'vue-router'
// import DashboardLayout from '@/layout/DashboardLayout'
import DashboardHorizontal from '@/layout/DashboardHorizontal'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'dashboard',
      component: DashboardHorizontal,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('./views/Dashboard.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/exams/create',
          name: 'create',
          component: () => import('./views/ExamForm.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/courses/:id/create',
          name: 'create-course',
          component: () => import('./views/CourseForm.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/programs/:id',
          name: 'programs',
          component: () => import('./views/Program.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/exams/:id/course',
          name: 'exams_course',
          component: () => import('./views/CourseExam.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/exams/:id',
          name: 'exams',
          component: () => import('./views/Exam.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/student',
          name: 'student',
          component: () => import('./views/Student.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/home',
          name: 'home',
          component: () => import('./views/Home.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/thanks',
          name: 'thanks',
          component: () => import('./views/Thanks.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/icons',
          name: 'icons',
          component: () => import('./views/Icons.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('./views/UserProfile.vue')
        },
        {
          path: '/maps',
          name: 'maps',
          component: () => import('./views/Maps.vue')
        },
        {
          path: '/tables',
          name: 'tables',
          component: () => import('./views/Tables.vue')
        }
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      meta: { authPage: true },
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('./views/Login.vue')
        },
        {
          path: '/pengurus',
          name: 'staff',
          component: () => import('./views/StaffLogin.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('./views/Register.vue')
        }
      ]
    }
  ]
})
