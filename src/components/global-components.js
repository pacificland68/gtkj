import Vue from 'vue'

import NavMenu from '@/components/NavMenu/index.vue'
import FriendlyLink from '@/components/FriendlyLinks/index.vue'
import ContentHead from '@/components/ContentHead/index.vue'
import Carousel from '@/components/Carousel/index.vue'
import DevCenter from '@/components/DevCenter/index.vue'

const GlobalComponents = {

}
// import navMenu from '@/components/navMenu'
import Contents from '@/components/contents/'

// Vue.component(NavMenu)


// Vue.component('NavMenu', NavMenu)
Vue.component('FriendlyLink', FriendlyLink)
Vue.component('ContentHead', ContentHead)
Vue.component('Carousel', Carousel)
Vue.component('NavMenu', NavMenu)
Vue.component('Contents',Contents)
Vue.component('DevCenter', DevCenter)

export default GlobalComponents
