<script lang="ts">
import { defineComponent } from "vue";
import VHeader from "./components/VHeader.vue";

export default defineComponent({
  name: "VApp",
  components: {
    VHeader,
  },
});
</script>

<template>
  <main class="flex-fill">
    <VHeader />
    <RouterView />
  </main>
</template>
