// ./src/views/SignIn.vue
<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">聊天室登入</h1>
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
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">密碼</label>
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

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >登入</button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">新會員註冊</router-link>
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
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "請填入 email 和 password"
          });
          return;
        }

        this.isProcessing = true;

        let res = await authorizationAPI.signIn({
          email: this.email,
          password: this.password
        });

        const { data, statusText } = res;
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        /* store token in localStorage */
        localStorage.setItem("token", data.token);
        /* 將資料傳到 Vuex 中 */
        this.$store.commit("setCurrentUser", data.user);
        /* 傳送登入成功給 socket.io*/
        this.$socket.emit("onlineHint", data.user.name);
        // redirect to chatroom
        this.$router.push("/chatroom");
      } catch (err) {
        this.isProcessing = false;
        this.password = "";
        Toast.fire({
          icon: "warning",
          title: "密碼或 Email 輸入錯誤"
        });
      }
    }
  }
};
</script>