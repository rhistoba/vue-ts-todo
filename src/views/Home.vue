<template>
  <div class="home">
    <TodoList :todos="todos" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoList from "@/components/TodoList.vue";
import axios from "@/axios";
import { Todo } from "@/types/todo";

export default Vue.extend({
  name: "home",
  components: {
    TodoList
  },
  data(): {
    todos: Todo[];
  } {
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
});
</script>
