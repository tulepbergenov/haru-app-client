<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";
import { ITodo } from "@/types";
import { v4 as uuid } from "uuid";
import { toast } from "vue3-toastify";
import {
  Form as VForm,
  Field as VField,
  ErrorMessage as VErrorMessage,
} from "vee-validate";
import * as yup from "yup";

export default defineComponent({
  name: "VAddTodoView",
  components: { VForm, VField, VErrorMessage },
  data() {
    return {
      min: 6,
    };
  },
  methods: {
    ...mapMutations(["addTodo"]),
    onSubmit(values: { title: string; description: string }) {
      const newTodo: ITodo = {
        id: uuid(),
        title: values.title,
        description: values.description,
      };

      this.addTodo(newTodo);
      toast.success("A new todo has been successfully created!");
    },
  },
  computed: {
    schema() {
      return yup.object({
        title: yup.string().required("Title is a required field"),
        description: yup.string().required("Description is a required field"),
      });
    },
  },
});
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col">
          <header>
            <h1 class="my-3">Add Todo</h1>
          </header>
        </div>
      </div>
      <div class="row">
        <div class="col col-lg-5">
          <VForm @submit="onSubmit" :validation-schema="schema">
            <div class="mb-3">
              <label for="title" class="form-label">Title</label>
              <VField
                name="title"
                type="text"
                class="form-control"
                id="title"
              />
              <VErrorMessage name="title" class="text-danger" />
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Description</label>
              <VField
                name="description"
                class="form-control"
                id="description"
                rows="3"
              />
              <VErrorMessage name="description" class="text-danger" />
            </div>
            <button type="submit" class="btn btn-primary w-100">
              Add Todo
            </button>
          </VForm>
        </div>
      </div>
    </div>
  </section>
</template>
