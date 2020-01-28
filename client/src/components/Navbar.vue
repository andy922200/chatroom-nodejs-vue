// ./src/components/Navbar.vue
<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link class="mx-auto navbar-brand" to="/chatroom">Chatroom</router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div id="navbarSupportedContent" class="navbar-collapse collapse navbar-center">
      <div class="ml-auto d-flex align-items-center navbar-collapse-center">
        <router-link v-if="currentUser.isAdmin" id="admin" to="/admin/users">
          <h4>管理員後台</h4>
        </router-link>
        <a target="_blank" href="#">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  }
};
</script>

<style scoped>
#navbarSupportedContent a {
  font-size: 30px;
  color: white;
  margin: 0px auto;
  text-decoration: none;
}
#navbarSupportedContent h4 {
  font-size: 20px;
  margin: 0px auto;
}
@media (max-width: 991px) {
  .navbar-collapse {
    margin-right: 56px;
  }
}
</style>

