// ./src/views/Chatroom.vue
<template>
  <div>
    <Navbar />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="top">
      <h4>請暢所欲言</h4>
      <h5 v-if="currentUser.isAdmin === true">您具有管理員資格</h5>
    </div>
    <br />
    <div class="container">
      <perfect-scrollbar>
        <div class="abc">
          <div class="messages">
            <ul class="list-unstyled">
              <li
                v-for="message in messages"
                :key="message.id"
                :class="{me: (message.name === currentUser.name), clearfix: true}"
              >
                <div class="name">
                  <h5>{{message.name}}</h5>
                  <span>{{message.message}}</span>
                  <h6>@{{message.time}}</h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </perfect-scrollbar>
      <div class="clearfix"></div>
      <div class="input">
        <form @submit.prevent="send(message)">
          <div class="input-group">
            <input type="text" class="form-control" v-model="message" placeholder="請輸入訊息......" />
            <span class="input-group-btn">
              <button class="btn btn-default" type="submit">-></button>
            </span>
          </div>
        </form>
      </div>
    </div>
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
  data() {
    return {
      message: "",
      messages: [
        {
          id: -1,
          name: "test",
          message: "this is a test.",
          time: "2001-01-01"
        },
        {
          id: -2,
          name: "test",
          message: "this is a test.",
          time: "2001-01-01"
        },
        { id: -3, name: "root", message: "Admin Root.", time: "2001-01-01" },
        {
          id: -4,
          name: "root",
          message: "Admin Root AAA.",
          time: "2001-01-02"
        },
        {
          id: -5,
          name: "root",
          message: "Admin Root AAA.",
          time: "2001-01-02"
        },
        {
          id: -6,
          name: "root",
          message: "Admin Root AAA.",
          time: "2001-01-02"
        }
      ]
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  }
};
</script>
<style scoped>
.abc {
  height: 400px;
}
.top {
  text-align: center;
  width: 100%;
}
.messages .name {
  width: 100%;
}
.messages .me {
  text-align: right;
  width: 98%;
}
.messages .me h5,
.messages .name h5 {
  font-size: 18px;
  margin: 0px 5px 10px 0px;
}
.messages .name span {
  background-color: #5fc9f8;
  border-radius: 10px;
  padding: 8px;
  margin: 0px 0px 5px 0px;
}
.messages .me .name span {
  background-color: #53d769;
  border-radius: 10px;
  padding: 8px;
  margin: 0px 0px 5px 0px;
}
.messages .me h6,
.messages .name h6 {
  font-size: 14px;
  margin: 10px 5px 10px 0px;
}
.input {
  margin: 20px auto;
}
</style>