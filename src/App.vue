<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped lang="scss">
#app {
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}
</style>
