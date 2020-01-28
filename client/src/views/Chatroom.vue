// ./src/views/Chatroom.vue
<template>
  <div>
    <h4>This is a public chatroom</h4>
    <h5 v-if="currentUser.isAdmin === true">如果是Admin，這邊會顯示</h5>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Chatroom",
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  }
};
</script>