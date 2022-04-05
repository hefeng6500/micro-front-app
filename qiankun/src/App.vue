<template>
  <div>
    <el-menu mode="horizontal" :router="true">
      <el-menu-item :route="{ path: '/' }" index="1">Home</el-menu-item>
      <el-menu-item :route="{ path: '/vue' }" index="2">vue</el-menu-item>
      <el-menu-item :route="{ path: '/react' }" index="3">react</el-menu-item>
    </el-menu>

    <router-view v-show="$route.name"></router-view>
    <div v-show="!$route.name" id="vue"></div>
    <div v-show="!$route.name" id="react"></div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
