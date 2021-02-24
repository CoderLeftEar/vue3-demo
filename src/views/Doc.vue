<template>
  <div class="doc">
    <top-nav />
    <div class="content">
      <aside>MENU</aside>
      <main>主内容</main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";

export default {
  name: "Doc",
  components: {
    TopNav,
  },
};
</script>

<style lang="scss" scoped></style>
