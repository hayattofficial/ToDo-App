<template>
    <div>
      <h2>Incomplete Tasks</h2>
      <!-- Use v-if to conditionally render the TaskList based on the route -->
      <TaskList v-if="incompleteTasks.length > 0" :tasks="incompleteTasks" />
      <p v-else>No incomplete tasks to display.</p>
    </div>
  </template>
  
  <script>
  import TaskList from "@/components/TaskList.vue";
  
  export default {
    components: {
      TaskList,
    },
    computed: {
      incompleteTasks() {
        const storedTasks = localStorage.getItem("tasks");
        const tasks = storedTasks ? JSON.parse(storedTasks) : [];
        return tasks.filter((task) => !task.completed);
      },
    },
  };
  </script>
  