import Vue from 'vue';
import VueRouter from 'vue-router';
// import TaskList from './components/TaskList.vue';
import CompletedTasks from './views/CompletedTasks.vue';
import IncompleteTasks from './views/IncompleteTasks.vue';

Vue.use(VueRouter);

const routes = [
//   { path: '/', name:"allTask", component: TaskList },
  { path: '/completed',name:"completedTasks", component: CompletedTasks },
  { path: '/incomplete',name:"incompleteTasks", component: IncompleteTasks },
];

const router = new VueRouter({
    mode: 'history',
  routes,
});

export default router;
