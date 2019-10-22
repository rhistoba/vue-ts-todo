<template>
  <div>
    <form @submit.prevent="submitTodo">
      <div>
        <input type="text" required v-model="form.title" />
      </div>
      <div>
        <input type="date" v-model="form.deadline" />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { TodoParams } from "@/types/todo";

export default Vue.extend({
  name: "TodoNew",
  data(): {
    form: {
      title: string;
      deadline: Date | null;
    };
  } {
    return {
      form: {
        title: "",
        deadline: null
      }
    };
  },
  methods: {
    submitTodo(): void {
      const params: TodoParams = {
        ...this.form,
        status: "todo"
      };
      this.$emit("add-todo", params);
    }
  }
});
</script>

<style scoped lang="scss"></style>
