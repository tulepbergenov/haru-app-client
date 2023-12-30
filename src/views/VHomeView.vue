<script lang="ts">
import { ITodo } from "@/types";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "VHomeView",
  data() {
    return {
      todos: [] as ITodo[],
    };
  },
  methods: {
    ...mapGetters(["getTodos"]),
  },
  mounted() {
    this.todos = this.getTodos();
  },
});
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col col-lg-5">
          <header>
            <h1 class="my-3">Haru App</h1>
          </header>
        </div>
      </div>
      <div class="row">
        <div v-if="todos.length" class="col col-lg-5">
          <div class="list-group">
            <RouterLink
              v-for="todo in todos"
              :key="todo.id"
              :to="`/todo/${todo.id}`"
              class="list-group-item list-group-item-action"
              >{{ todo.title }}</RouterLink
            >
          </div>
        </div>
        <p v-if="!todos.length">{{ "Todos Empty:(" }}</p>
      </div>
    </div>
  </section>
</template>
