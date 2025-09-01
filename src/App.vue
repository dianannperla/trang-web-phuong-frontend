<template>
  <div id="app">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Chào mừng bạn đến với Trang Web Phương!'
    };
  }
};
</script>

<style scoped>
#app {
  text-align: center;
  padding: 20px;
}
</style>