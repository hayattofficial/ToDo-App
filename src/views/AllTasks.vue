<!-- <template>
  <div>
    <h2>All Tasks</h2>
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>
            <label>
              <input type="checkbox" v-model="task.completed" @change="updateTask(task)" />
              <span :class="{ completed: task.completed }">{{ task.title }}</span>
            </label>
          </td>
          <td :class="{ completed: task.completed }">{{ task.description }}</td>
          <td>
            <button @click="deleteTask(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [], // Initialize tasks array
    };
  },
  mounted() {
    // Load tasks from localStorage when the component is mounted
    this.loadTasksFromLocalStorage();
  },
  methods: {
    loadTasksFromLocalStorage() {
      const storedTasks = localStorage.getItem("tasks");
      this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
    },
    updateTask(updatedTask) {
      // Find the index of the updatedTask in the tasks array
      const index = this.tasks.findIndex(task => task === updatedTask);

      if (index !== -1) {
        // Update the task's completion status in the local tasks array
        this.tasks[index].completed = updatedTask.completed;

        // Save the updated tasks to localStorage
        this.saveTasksToLocalStorage();
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.saveTasksToLocalStorage();
    },
    saveTasksToLocalStorage() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    addTask(task) {
      // Add the new task to the local tasks array
      this.tasks.push(task);

      // Save the updated tasks to localStorage
      this.saveTasksToLocalStorage();
    },
  },
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
  margin-top: 10px;
}
th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
th {
  background-color: #f2f2f2;
}
</style> -->
