// ./src/views/Chatroom.vue
<template>
  <div>
    <Navbar />
    <br />
    <br />
    <br />
    <br />
    <br />
    <h4>This is a public chatroom</h4>
    <h5 v-if="currentUser.isAdmin === true">如果是Admin，這邊會顯示</h5>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Navbar from "./../components/Navbar";

export default {
  name: "Chatroom",
  components: {
    Navbar
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  }
};
</script>