import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: (resolve) => {
        require(['../views/index'], resolve)
      }
    },
    {
      path: '/radio',
      name: 'radio',
      component: (resolve) => {
        require(['../views/radio'], resolve)
      }
    },
    {
      path: '/actionSheet',
      name: 'actionSheet',
      component: (resolve) => {
        require(['../views/actionSheet'], resolve)
      }
    },
    {
      path: '/footer',
      name: 'footer',
      component: (resolve) => {
        require(['../views/footer'], resolve)
      }
    },
    {
      path: '/search',
      name: 'search',
      component: (resolve) => {
        require(['../views/search'], resolve)
      }
    },
    {
      path: '/Draggable',
      name: 'Draggable',
      component: (resolve) => {
        require(['../views/Draggable'], resolve)
      }
    },
    {
      path: '/region-picker',
      name: 'region-picker',
      component: (resolve) => {
        require(['../views/region-picker'], resolve)
      }
    },
    {
      path: '/toast',
      name: 'toast',
      component: (resolve) => {
        require(['../views/toast'], resolve)
      }
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: (resolve) => {
        require(['../views/dialog'], resolve)
      }
    },
    {
      path: '/noData',
      name: 'noData',
      component: (resolve) => {
        require(['../views/noData'], resolve)
      }
    },
    {
      path: '/textarea',
      name: 'textarea',
      component: (resolve) => {
        require(['../views/textarea'], resolve)
      }
    },
    {
      path: '/uploadImg',
      name: 'uploadImg',
      component: (resolve) => {
        require(['../views/uploadImg'], resolve)
      }
    },
    {
      path: '/location',
      name: 'location',
      component: (resolve) => {
        require(['../views/location'], resolve)
      }
    },
    {
      path: '/progressBar',
      name: 'progressBar',
      component: (resolve) => {
        require(['../views/progressBar'], resolve)
      }
    },
    {
      path: '/echart',
      name: 'echart',
      component: (resolve) => {
        require(['../views/echart'], resolve)
      }
    },
    {
      path: '/dateTime',
      name: 'dateTime',
      component: (resolve) => {
        require(['../views/dateTime'], resolve)
      }
    },
    {
      path: '/citySelect',
      name: 'citySelect',
      component: (resolve) => {
        require(['../views/citySelect'], resolve)
      }
    },
    {
      path: '/djs',
      name: 'djs',
      component: (resolve) => {
        require(['../views/djs'], resolve)
      }
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: (resolve) => {
        require(['../views/calendar'], resolve)
      }
    },
    {
      path: '/pulltoload',
      name: 'pulltoload',
      component: (resolve) => {
        require(['../views/pulltoload'], resolve)
      }
    }
  ]
})

export default router
