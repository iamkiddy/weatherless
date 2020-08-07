<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created: function(){
     const loading = this.$vs.loading()
          setTimeout(() => {
            loading.close()
          }, 3000)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital@1&display=swap');


#app {
  font-family: "Poppins", sans-serif;
}
</style>
