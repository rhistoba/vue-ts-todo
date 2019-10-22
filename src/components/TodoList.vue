<template>
  <div>
    <div class="todo-list">
      <div class="todo-item" v-for="todo in todos" :key="todo.id">
        <div class="todo-item-title">{{ todo.title }}</div>
        <div class="todo-item-deadline">{{ todo.deadline }}</div>
        <div class="todo-item-status">{{ todo.status }}</div>
        <div class="todo-item-button">
          <button
            type="button"
            @click="
              changeStatus(todo, todo.status === 'todo' ? 'done' : 'todo')
            "
          >
            {{ changeStatusButtonText(todo) }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Todo, TodoParams } from "@/types/todo";

export default Vue.extend({
  name: "TodoList",
  props: {
    todos: Array as PropType<Todo[]>
  },
  methods: {
    changeStatus(todo: Todo, status: "todo" | "done"): void {
      const params: TodoParams = { status };
      this.$emit("update-todo", todo, params);
    }
  },
  computed: {
    changeStatusButtonText(): Function {
      return (todo: Todo): string => {
        return todo.status === "todo" ? "done!" : "undo";
      };
    }
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
      width: 10%;
    }
    .todo-item-button {
      width: 10%;
    }
  }
}
</style>
