<script lang="ts">
import { defineComponent } from "vue";
import { route } from "@/router";

export default defineComponent({
  name: "VApp",
  methods: {
    route,
  },
});
</script>

<template>
  <header class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <div class="container">
      <RouterLink :to="route({ name: 'home' })" class="navbar-brand"
        >Haru</RouterLink
      >
      <nav>
        <ul class="navbar-nav flex-row gap-5 me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink :to="route({ name: 'addTodo' })" class="nav-link"
              >Add Todo</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main class="flex-fill">
    <RouterView />
  </main>
</template>
