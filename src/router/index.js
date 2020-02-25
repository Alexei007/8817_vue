import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Bulletin from '@/components/Bulletin'
import Faq from '@/components/Faq'
import FaqDetail from '@/components/FaqDetail'
import BulletinDetail from '@/components/BulletinDetail'
import Medical from '@/components/Medical'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/medical',
      name: 'medical',
      component: Medical
    },
    {
      path: '/bulletin',
      name: 'bulletin',
      component: Bulletin
    },
    {
      path: '/bulletin-detail',
      name: 'bulletin-detail',
      component: BulletinDetail
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/faq-detail',
      name: 'faq-detail',
      component: FaqDetail
    },
  ]
})
