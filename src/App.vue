<template>
  <div id="app">
      <b-navbar class="container">
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img src="/logo.png" alt="lwmqn" />
          </b-navbar-item>
        </template>

        <template slot="end">
      <!-- <b-navbar-item
            tag="router-link"
            v-for="route in navbarItems"
            :key="route.path"
            :to="route.path"
            >
              {{ route.name }}
            </b-navbar-item
          > -->

          <span class="navbar-item">
            <a class="button is-success" href="https://github.com/lwmqn">
              <span class="icon">
                <i class="fab fa-github"></i>
              </span>
              <span>GitHub</span>
            </a>
          </span>
        </template>
      </b-navbar>
    <router-view></router-view>

    <footer class="footer">
        <div class="content has-text-centered">
              Released under the <a href="http://opensource.org/licenses/mit-license.php">MIT License</a>
              <br>
              Copyright © 2016-2019 <strong>LwMQN</strong> project, sivann, and other contributors
        </div>
      </footer>
  </div>
</template>

<script>
export default {
  computed: {
    navbarItems() {
      return this.$router.options.routes.filter(() => true)
    }
  },
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
