<template>
  <div id="app">
    <h1 class="heading">Task Manager</h1>
    <TaskForm @add-task="addTask" />
    <nav class="navbar navbar-expand-lg ">
      <div class="container">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">All Tasks</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/completed">Completed Tasks</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/incomplete">Incomplete Tasks</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- <AllTasks :tasks="tasks" /> -->
    <router-view></router-view>

    <TaskList v-if="showTaskList" :tasks="tasks" @delete-task="deleteTask" @toggle-completed="toggleCompleted"/>
    <FooterComponent />
  </div>
</template>

<script>
import TaskForm from "@/components/TaskForm.vue";
// import AllTasks from "@/views/AllTasks.vue";
import TaskList from "@/components/TaskList.vue";
import FooterComponent from "@/components/FooterSection.vue";

export default {
  components: {
    TaskForm,
    // AllTasks,
    TaskList,
    FooterComponent,
  },
  data() {
    return {
      tasks: [],
      showTaskList: true,
    };
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
      this.saveTasksToLocalStorage();
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.saveTasksToLocalStorage();
    },
    saveTasksToLocalStorage() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    loadTasksFromLocalStorage() {
      const storedTasks = localStorage.getItem("tasks");
      this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
    },
    toggleCompleted(task) {
      // Find the index of the task in the tasks array
      const index = this.tasks.findIndex((t) => t === task);

      if (index !== -1) {
        // Update the completed status of the task
        this.tasks[index].completed = task.completed;

        // Move the task to the "Completed Tasks" view if it's completed
        if (task.completed) {
          this.$router.push({ name: 'completedTasks' });
        }
      }

      // Save the updated tasks to localStorage
      this.saveTasksToLocalStorage();
    },
  },
  created() {
    this.loadTasksFromLocalStorage();
  },
  watch: {
    $route(to) {
      // Check the route name and hide/show the TaskList accordingly
      if (to.name === 'completedTasks' || to.name === 'incompleteTasks') {
        this.showTaskList = false;
      } else {
        this.showTaskList = true;
      }
    },
  },
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  flex-grow: 1;
}

router-link{
  cursor: pointer;
}
.heading{
  padding: 20px;
  background-color: #37be9c;
}
.navbar{
    background: #35495e !important;
  }
  li a{
  color: #ffffff !important;

}

</style>
