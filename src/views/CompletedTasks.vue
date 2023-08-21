<template>
    <div>
      <h2>Completed Tasks</h2>
      <TaskList v-if="completedTasks.length > 0" :tasks="completedTasks" />
    <p v-else>No completed tasks to display.</p>
    </div>
  </template>
  
  <script>
  import TaskList from "@/components/TaskList.vue";
  
  export default {
    components: {
      TaskList,
    },
    computed: {
      completedTasks() {
        const storedTasks = localStorage.getItem("tasks");
        const tasks = storedTasks ? JSON.parse(storedTasks) : [];
        return tasks.filter((task) => task.completed);
      },
    },
  };
  </script>
  