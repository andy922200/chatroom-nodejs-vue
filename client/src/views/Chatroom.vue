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
                  <h6>@{{message.time|fromNow}}</h6>
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
      <p class="warning" :style="{visibility: inputHint ? 'visible' : 'hidden'}">請檢查輸入欄位是否有空白</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Navbar from "./../components/Navbar";
import { Toast } from "./../utils/helpers";
import { fromNowFilter } from "./../utils/mixins";

export default {
  name: "Chatroom",
  components: {
    Navbar
  },
  mixins: [fromNowFilter],
  data() {
    return {
      message: "",
      messages: [],
      inputHint: false
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"])
  },
  created() {
    // client receives the message
    this.sockets.subscribe("getMessage", data => {
      this.messages.push({
        id: data.id,
        name: data.User.name,
        message: data.content,
        UserId: data.User.id,
        time: data.createdAt
      });
    });
  },
  methods: {
    // client sends the message
    send() {
      if (this.message.match(/^\s+/) || !this.message) {
        Toast.fire({
          icon: "warning",
          title: "請確認開頭不要有空白字元"
        });
        this.message = "";
        return;
      } else {
        this.$socket.emit("getMessage", {
          text: this.message,
          UserId: this.currentUser.id,
          name: this.currentUser.name
        });
        this.message = "";
      }
    }
  },
  watch: {
    message: function() {
      if (this.message.match(/^\s+/)) {
        this.inputHint = true;
      } else {
        this.inputHint = false;
      }
    }
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
.warning {
  margin-left: 5px;
  color: red;
  font-size: 18px;
  font-weight: bold;
}
</style>