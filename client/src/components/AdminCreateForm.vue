// ./src/components/CreateEditForm.vue
<template>
  <div class="container py-5">
    <form class="w-100" @submit.stop.prevent="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Create new User</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
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
          v-model="email"
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
          v-model="password"
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
          v-model="passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          required
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="isAdmin">Admin?</label>
        <select name="isAdmin" id="isAdmin" v-model="isAdmin" class="form-control">
          <option selected value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >{{isProcessing ? "Processing..." : "Create"}}</button>

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
  name: "AdminCreateForm",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
      isAdmin: -1,
      isProcessing: false,
      passwordHint: false,
      passwordCheckHint: false
    };
  },
  methods: {
    async handleSubmit(e) {
      try {
        this.isProcessing = true;
        if (
          !this.name ||
          !this.email ||
          !this.password ||
          !this.passwordCheck ||
          !this.isAdmin
        ) {
          Toast.fire({
            icon: "warning",
            title: "請確認已填寫所有欄位"
          });
          this.isProcessing = false;
          return;
        }
        if (this.password !== this.passwordCheck) {
          Toast.fire({
            icon: "warning",
            title: "兩次輸入的密碼不同，請確認"
          });
          this.passwordCheck = "";
          this.isProcessing = false;
          return;
        }
        if (this.password.length < 8) {
          Toast.fire({
            icon: "warning",
            title: "密碼長度需大於8"
          });
          this.passwordCheck = "";
          this.isProcessing = false;
          return;
        }
        if (this.isAdmin === -1) {
          Toast.fire({
            icon: "warning",
            title: "請選擇權限"
          });
          this.passwordCheck = "";
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
    password: function() {
      if (this.password !== this.passwordCheck) {
        this.passwordCheckHint = true;
      } else {
        this.passwordCheckHint = false;
      }
      this.password.length < 8
        ? (this.passwordHint = true)
        : (this.passwordHint = false);
    },
    passwordCheck: function() {
      if (this.password !== this.passwordCheck) {
        this.passwordCheckHint = true;
      } else {
        this.passwordCheckHint = false;
      }
    }
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
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