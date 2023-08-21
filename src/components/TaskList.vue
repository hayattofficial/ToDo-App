<template>
    <div class="task-list">
      <h2 class="mt-2">Task List</h2>
      <table >
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td>
              <label>
                <input type="checkbox" @change="toggleCompleted" v-model="task.completed">
                <span :class="{ completed: task.completed }">{{ task.title }}</span>
              </label>
            </td>
            <td :class="{ completed: task.completed }">{{ task.description }}</td>
            <td>
              <button @click="deleteTask(task.id)" class="action-button">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: ['tasks'],
    methods: {
        toggleCompleted() {
      this.$emit('toggle-completed', this.task);
    },
      deleteTask(taskId) {
        this.$emit('delete-task', taskId);
      },
    }
  };
  </script>
  
  <style scoped>
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-left: 10px;
  }
  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  th {
    background-color: #f2f2f2;
  }
  .action-button{
    background: #e63946;
    padding: 5px;
    border-radius: 8px;
    color: white;
  }
  input[type="checkbox" i] {
   margin-right: 5px;
    width: 20px;
    height: 15px;
    accent-color: #37be9c;;
}

tr:hover{
    background-color: #c7f1e5;

}
  </style>
  