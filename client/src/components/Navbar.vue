// ./src/components/Navbar.vue
<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/chatroom">Chatroom</router-link>

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
        <button id="logout" type="button" class="btn btn-sm btn-outline-danger" @click="logout">
          <h5>登出</h5>
        </button>
        <a target="_blank" href="https://github.com/andy922200/chatroom-nodejs-vue">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";

export default {
  name: "Navbar",
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  },
  methods: {
    logout() {
      this.$store.commit("revokeAuthentication");
      this.$router.push("/signin");
      Toast.fire({
        icon: "success",
        title: "成功登出"
      });
    }
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
#logout {
  padding-top: 4px;
  margin-right: 10px;
}
#logout h5 {
  margin-bottom: 0px;
}
@media (max-width: 991px) {
  .navbar-collapse {
    margin-right: 56px;
  }
}
@media (min-width: 992px) {
  #navbarSupportedContent h4 {
    margin-right: 10px;
  }
}
</style>

