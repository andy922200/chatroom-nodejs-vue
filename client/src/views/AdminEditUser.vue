<template>
  <div>
    <Navbar />
    <br />
    <br />
    <br />
    <Spinner v-if="isLoading" />
    <AdminCreateForm v-else :initial-user="user" @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Navbar from "./../components/Navbar";
import AdminCreateForm from "./../components/AdminEditForm";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import Spinner from "./../components/Spinner";

export default {
  name: "AdminEditUser",
  inject: ["reload"],
  components: {
    Navbar,
    AdminCreateForm,
    Spinner
  },
  data() {
    return {
      user: {
        id: -1,
        name: "",
        isAdmin: -1
      },
      isLoading: true
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  methods: {
    async fetchUser(userId) {
      try {
        const res = await adminAPI.getUser({ userId });
        const { data } = res;
        if(data?.user){
          this.user = data.user;
        }else{
          throw new Error(data.message);
        }        
        this.isLoading = false;
      } catch (err) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: err
        });
      }
    },
    async handleAfterSubmit(formData) {
      try {
        const userId = this.user.id;
        const { data } = await adminAPI.putUser({
          formData,
          userId
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "更新使用者成功"
        });
        this.$router.push("/admin/users");
      } catch (err) {
        Toast.fire({
          icon: "error",
          title: err
        });
        this.reload();
      }
    }
  }
};
</script>