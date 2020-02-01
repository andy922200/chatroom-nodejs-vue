// ./src/views/AdminCreateUser.vue
<template>
  <div>
    <Navbar />
    <br />
    <br />
    <br />
    <AdminCreateForm @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Navbar from "./../components/Navbar";
import AdminCreateForm from "./../components/AdminCreateForm";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  name: "AdminCreateUser",
  components: {
    Navbar,
    AdminCreateForm
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        const { data, statusText } = await adminAPI.postUser({ formData });
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(data.message);
        }
        // redirect to /admin/users if the status is success`
        Toast.fire({
          icon: "success",
          title: "建立新使用者成功"
        });
        this.$router.push("/admin/users");
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: err
        });
      }
    }
  }
};
</script>