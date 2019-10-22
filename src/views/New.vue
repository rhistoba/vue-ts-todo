<template>
  <div>
    <TodoNew @add-todo="addTodo" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoNew from "@/components/TodoNew.vue";
import axios from "@/axios";
import { TodoParams } from "@/types/todo";

export default Vue.extend({
  name: "new",
  components: {
    TodoNew
  },
  methods: {
    addTodo(params: TodoParams): void {
      axios
        .post("/todos", params)
        .then(response => {
          this.$router.push("/");
        })
        .catch(error => {
          alert("サーバとの通信に失敗しました。");
        });
    }
  }
});
</script>
