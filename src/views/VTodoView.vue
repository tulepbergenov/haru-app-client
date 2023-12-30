<script lang="ts">
import { ITodo } from "@/types";
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "VTodoView",
  data() {
    return {
      isLoading: true,
      todo: null! as ITodo,
    };
  },
  methods: {
    ...mapActions(["getTodoById"]),
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  async mounted() {
    const todo: ITodo = await this.getTodoById(this.id);

    if (!todo) {
      this.$router.push("/not-found");
    }

    this.isLoading = false;
    this.todo = todo;
  },
});
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col col-lg-5">
          <header
            v-if="isLoading"
            class="card-text d-flex flex-column placeholder-glow"
          >
            <h1 class="my-3 placeholder col-12"></h1>
            <p class="mt-3 placeholder col-12"></p>
            <p class="placeholder col-12"></p>
            <p class="placeholder col-12"></p>
          </header>
          <header v-if="!isLoading">
            <h1 class="my-3">{{ todo.title }}</h1>
            <p class="mt-3">
              {{ todo.description }}
            </p>
          </header>
        </div>
      </div>
    </div>
  </section>
</template>
