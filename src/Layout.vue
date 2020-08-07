<template>
  <div class="layout">
    <Navbar />
    <div class="app-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: "Layout",
  components: {
    Navbar
  }
}
</script>

<style scoped>
  .layout {
    overflow-x: hidden !important;
  }

  .app-container {
    padding: 0px 9%  !important;
  }
</style>
