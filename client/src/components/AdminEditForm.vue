<template>
  <div class="container py-5">
    <form class="w-100" @submit.stop.prevent="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Edit User</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="user.email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <span
          class="warning"
          :style="{visibility: passwordHint ? 'visible' : 'hidden'}"
        >The password length should be greater than 8.</span>
        <input
          id="password"
          v-model="user.password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <span
          class="warning"
          :style="{visibility: passwordCheckHint ? 'visible' : 'hidden'}"
        >Does not match the password above.</span>
        <input
          id="password-check"
          v-model="user.passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          required
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="isAdmin">Admin?</label>
        <select name="isAdmin" id="isAdmin" v-model="user.isAdmin" class="form-control">
          <option selected value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >{{isProcessing ? "Processing..." : "Save"}}</button>

      <router-link to="/admin/users">
        <button type="button" class="btn btn-lg btn-block btn-outline-dark">Back</button>
      </router-link>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";

export default {
  name: "AdminEditForm",
  props: {
    initialUser: {
      type: Object,
      default: () => ({
        name: "",
        email: "",
        password: "",
        passwordCheck: "",
        isAdmin: -2
      })
    }
  },
  data() {
    return {
      user: {
        id: -1,
        name: "",
        password: "",
        passwordCheck: "",
        isAdmin: -1
      },
      isProcessing: false,
      passwordHint: false,
      passwordCheckHint: false
    };
  },
  created() {
    this.user = {
      ...this.user,
      ...this.initialUser
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  },
  methods: {
    async handleSubmit(e) {
      try {
        this.isProcessing = true;
        if (
          !this.user.name ||
          !this.user.email ||
          !this.user.password ||
          !this.user.passwordCheck ||
          !this.user.isAdmin
        ) {
          Toast.fire({
            icon: "warning",
            title: "請確認已填寫所有欄位"
          });
          this.isProcessing = false;
          return;
        }
        if (this.user.password !== this.user.passwordCheck) {
          Toast.fire({
            icon: "warning",
            title: "兩次輸入的密碼不同，請確認"
          });
          this.user.passwordCheck = "";
          this.isProcessing = false;
          return;
        }
        if (this.user.password.length < 8) {
          Toast.fire({
            icon: "warning",
            title: "密碼長度需大於8"
          });
          this.user.passwordCheck = "";
          this.isProcessing = false;
          return;
        }
        if (this.user.isAdmin === -1) {
          Toast.fire({
            icon: "warning",
            title: "請選擇權限"
          });
          this.user.isAdmin = -1;
          this.user.passwordCheck = "";
          this.isProcessing = false;
          return;
        }
        const form = e.target;
        const formData = new FormData(form);
        this.$emit("after-submit", formData);
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: err
        });
        this.isProcessing = false;
      }
    }
  },
  watch: {
    initialUser(user) {
      this.user = {
        ...this.user,
        ...user
      };
      this.user.isAdmin = -1;
    },
    user: {
      handler: function() {
        if (this.user.password !== this.user.passwordCheck) {
          this.passwordCheckHint = true;
        } else {
          this.passwordCheckHint = false;
        }
        this.user.password.length < 8
          ? (this.passwordHint = true)
          : (this.passwordHint = false);
        if (this.user.password !== this.user.passwordCheck) {
          this.passwordCheckHint = true;
        } else {
          this.passwordCheckHint = false;
        }
      },
      deep: true
    }
  }
};
</script>

<style scoped>
.warning {
  margin-left: 5px;
  color: red;
  font-size: 18px;
  font-weight: bold;
}
a:hover {
  text-decoration: none;
}
</style>