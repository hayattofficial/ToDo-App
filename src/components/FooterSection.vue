<template>
    <footer class="footer bg-dark text-light">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <p class="m-auto">&copy; {{ currentYear }} Hayat ToDo App</p>
          </div>
          
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
  </script>
  
  <style scoped>
  footer{
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 15px;
  }
  </style>
  