import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'

import '~/plugins'
import '~/components'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})

// require('./bootstrap');

// window.Vue = require('vue');

// import VueRouter from 'vue-router';
 
// window.Vue.use(VueRouter);

// import ProfessorsIndex from './components/professors/ProfessorsIndex.vue';
// import ProfessorsCreate from './components/professors/ProfessorsCreate.vue';
// import ProfessorsEdit from './components/professors/ProfessorsEdit.vue';
 
// const routes = [
//     {
//         path: '/professors',
//         component: {
//             professorsIndex: ProfessorsIndex
//         },
//         name:'indexProfessor'
//     },
//     {path: '/admin/professors/create', component: ProfessorsCreate, name: 'createProfessor'},
//     {path: '/admin/professors/edit/:id', component: ProfessorsEdit, name: 'editProfessor'},
// ];

// const router = new VueRouter({mode: 'history', routes });

// const app = new Vue({router}).$mount('#app');