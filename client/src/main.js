// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#root'
})

Vue.component('Task', {
  template: '<li><slot></slot></li>',
});

Vue.component('task-list', {
  template: `
  <div>
      <task v-for="task in tasks">{{task.task}}</task>
  </div>
  `,

  data(){
      return{
          tasks:[
              {task: 'Go to store', complete: true},
              {task: 'Go to email', complete: false},
              {task: 'Go to home', complete: false}
          ]
      };
  }
});