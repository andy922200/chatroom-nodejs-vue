// ./src/views/SignUp.vue
<template>
  <div class="container py-5">
    <form class="w-100" @submit.stop.prevent="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
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

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >{{isProcessing ? "Processing..." : "Send"}}</button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin">Sign In</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2019-2020</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
      isProcessing: false,
      passwordHint: false,
      passwordCHeckHint: false
    };
  },
  methods: {
    async handleSubmit() {
      try {
        this.isProcessing = true;
        if (
          !this.name ||
          !this.email ||
          !this.password ||
          !this.passwordCheck
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
        const { data, statusText } = await authorizationAPI.signUp({
          name: this.name,
          email: this.email,
          password: this.password,
          passwordCheck: this.passwordCheck
        });

        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(data.message);
        }
        // redirect to /signin if the status is success`
        Toast.fire({
          icon: "success",
          title: "建立新使用者成功，請登入"
        });
        this.$router.push("/signin");
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: "無法建立新使用者，請稍後再試"
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
</style>