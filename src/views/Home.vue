<template>
  <div class="home">
    <TodoList :todos="todos" @update-todo="updateTodo" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoList from "@/components/TodoList.vue";
import axios from "@/axios";
import { Todo, TodoParams } from "@/types/todo";

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
    this.$_fetchTodos();
  },
  methods: {
    updateTodo(todo: Todo, params: TodoParams): void {
      axios
        .patch(`/todos/${todo.id}`, params)
        .then(response => {
          this.$_fetchTodos();
        })
        .catch(error => {
          alert("サーバとの通信に失敗しました。");
        });
    },
    $_fetchTodos(): void {
      axios
        .get("/todos")
        .then(response => {
          this.todos = response.data;
        })
        .catch(error => {
          alert("サーバとの通信に失敗しました。");
        });
    }
  }
});
</script>
