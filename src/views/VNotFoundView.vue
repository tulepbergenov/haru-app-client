<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VNotFoundView",
  methods: {
    onGoToHome() {
      this.$router.push("/");
    },
  },
});
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col col-lg-5">
          <header>
            <h1 class="my-3">Not Found</h1>
            <button
              @click="onGoToHome"
              type="button"
              class="btn btn-primary w-100"
            >
              {{ "Go to home :)" }}
            </button>
          </header>
        </div>
      </div>
    </div>
  </section>
</template>
