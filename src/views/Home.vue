<template>
  <div class="home">
    <TodoList :todos="todos" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import axios from "@/axios";

export default {
  name: "home",
  components: {
    TodoList
  },
  data() {
    return {
      todos: []
    };
  },
  mounted() {
    axios
      .get("/todos")
      .then(response => {
        this.todos = response.data;
      })
      .catch(error => {
        alert("サーバとの通信に失敗しました。");
      });
  }
};
</script>
