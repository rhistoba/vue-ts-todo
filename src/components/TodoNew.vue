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

export default Vue.extend({
  name: "TodoNew",
  data() {
    return {
      form: {
        title: "",
        deadline: null
      }
    };
  },
  methods: {
    submitTodo() {
      const params = {
        title: this.form.title,
        deadline: this.form.deadline,
        status: "todo"
      };
      this.$emit("add-todo", params);
    }
  }
});
</script>

<style scoped lang="scss"></style>
