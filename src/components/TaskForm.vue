<template>
    <form @submit.prevent="addTask">
      <div class="form-group">
        <label for="title">Title:</label>
        <input v-model="task.title" type="text" class="form-control" id="title" @input="clearError"/>
        <span v-if="errors.title" class="error">{{ errors.title }}</span>
      </div>
      <div class="form-group description-container">
        <label for="description">Description:</label>
        <textarea v-model="task.description" class="form-control" id="description"></textarea>
      </div>
      <button type="submit" class="btn btn-primary mb-3">Add Task</button>
    </form>
  </template>

<script>
export default {
  data() {
    return {
      task: {
        title: "",
        description: "",
        completed: false,
      },
      errors: {
        title: "",
      },
    };
  },
  methods: {
    addTask() {
      if (!this.task.title) {
        this.errors.title = "Title is required.";
        return;
      }

      this.$emit("add-task", { ...this.task });

      // Clear form fields
      this.task.title = "";
      this.task.description = "";
      this.errors.title = "";
    },
    clearError() {
      // Clear the title error message when there is content in the title input
      if (this.task.title) {
        this.errors.title = "";
      }
    },
  },
};
</script>

<style>
.error {
  color: red;
}
form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap:20px;
}
.form-control{
    border: 1px solid #37be97 !important;
}
.btn-primary {
    border: 1px solid #37be97 !important;
    background-color: #a8dadc !important;
    color: black !important;
}

.form-control:focus {
    border: 2px solid #37be97 !important;
    outline: 0;
    box-shadow: none !important;
}


.description-container{
    min-width: 350px;
}
label{
    margin-bottom:10px;
}


</style>
