<template>
  <div>
    <div class="todo-list">
      <div class="todo-item" v-for="todo in todos" :key="todo.id">
        <div class="todo-item-title">{{ todo.title }}</div>
        <div class="todo-item-deadline">{{ todo.deadline }}</div>
        <div class="todo-item-status">{{ todo.status }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TodoList",
  props: {
    todos: Array
  }
});
</script>

<style scoped lang="scss">
.todo-list {
  .todo-item {
    display: flex;
    justify-content: space-between;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    .todo-item-title {
      width: 50%;
    }
    .todo-item-deadline {
      width: 30%;
    }
    .todo-item-status {
      width: 20%;
    }
  }
}
</style>
