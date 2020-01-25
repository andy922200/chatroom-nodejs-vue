// ./src/views/NotFound.vue
<template>
  <div class="container py-5">
    <div id="for404" class="row align-items-center">
      <div class="col-md-6">
        <img src="../../public/static/404.jpg" alt="404" />
      </div>
      <div class="col-md-6">
        <h3>Oops... 找不到網頁</h3>
        <p>不小心迷路了嘛？沒關係</p>
        <p>請稍等，導覽員會帶您回首頁</p>
        <p>如果不支援自動跳轉，請點選下方按鈕</p>
        <div class="d-flex justify-content-center">
          <router-link to="/">
            <button type="button" class="btn btn-outline-primary">來去首頁</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    setTimeout(() => this.$router.push({ path: "/" }), 5000);
  }
};
</script>

<style>
#for404 h3,
#for404 h6 {
  color: #bc955c;
}

#for404 p {
  margin-top: 20px;
  color: #11495c;
  font-size: 1.5rem;
}

#for404 p,
#for404 h3 {
  text-align: center;
}

#for404 .row {
  height: 60vh;
}

#for404 img {
  width: 100%;
}
</style>