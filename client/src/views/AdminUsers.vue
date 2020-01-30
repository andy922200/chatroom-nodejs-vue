// ./src/views/AdminUsers.vue
<template>
  <div class="container py-5">
    <Navbar />
    <br />
    <br />
    <br />
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col" width="30">Role</th>
          <th scope="col" width="280">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{user.id}}</th>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td v-if="user.isAdmin">Admin</td>
          <td v-else>User</td>
          <td v-if="currentUser.id !== user.id">
            <button type="button" class="btn btn-outline-info">Edit</button>
            <button
              type="button"
              v-if="user.isAdmin"
              class="btn btn-outline-secondary"
              @click.stop.prevent="toggleUserRole({userId:user.id,isAdmin:user.isAdmin})"
            >Set as user</button>
            <button
              type="button"
              v-else
              class="btn btn-outline-primary"
              @click.stop.prevent="toggleUserRole({userId:user.id,isAdmin:user.isAdmin})"
            >Set as admin</button>
            <button
              type="button"
              class="btn btn-outline-danger"
              @click.stop.prevent="deleteUser({userId:user.id})"
            >Delete</button>
          </td>
          <td v-else></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Navbar from "./../components/Navbar";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  name: "AdminUsers",
  components: {
    Navbar
  },
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const res = await adminAPI.getUsers();
        const { data, statusText } = res;
        if (statusText !== "OK") {
          throw new Error();
        }
        this.users = data.users;
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "暫時無法取得資料，請稍後再試"
        });
      }
    },
    async toggleUserRole({ userId, isAdmin }) {
      const toBeAdmin = !isAdmin;
      try {
        const res = await adminAPI.putRole({ userId });
        const { statusText } = res;
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.users = this.users.map(user => {
          if (user.id !== userId) return user;
          return {
            ...user,
            isAdmin: toBeAdmin
          };
        });
        Toast.fire({
          icon: "success",
          title: "更新權限成功"
        });
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "暫時無法取得資料，請稍後再試"
        });
      }
    },
    async deleteUser({ userId }) {
      try {
        const res = await adminAPI.deleteUser({ userId });
        const { statusText } = res;
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.users = this.users.filter(user => user.id !== userId);
        Toast.fire({
          icon: "success",
          title: `刪除成功`
        });
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "暫時無法取得資料，請稍後再試"
        });
      }
    }
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  }
};
</script>

<style scoped>
.btn-outline-secondary {
  padding-right: 18px;
  padding-left: 18px;
}
@media screen and (max-width: 767px) {
  .btn-outline-primary {
    font-size: 16px;
    padding-right: 2px;
    padding-left: 2px;
  }
  .btn-outline-secondary {
    font-size: 16px;
    padding-right: 6px;
    padding-left: 6px;
  }
}
</style>
