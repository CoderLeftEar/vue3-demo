<template>
  <div class="home">
    <top-nav />
    <div class="bann">
      <h1>vue3-demo</h1>
      <h2>一个vue3-demo</h2>
      <p class="actions">
        <a>GitHub</a>
        <a>开始</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";

export default {
  name: "Home",
  components: {
    TopNav,
  },
};
</script>

<style></style>
