// ./src/views/Chatroom.vue
<template>
  <div>
    <h4>This is a public chatroom</h4>
    <h5 v-if="isAdmin === 1">如果是Admin，這邊會顯示</h5>
    <h5 v-if="isAdmin === 0">如果是User，這邊會顯示</h5>
  </div>
</template>

<script>
export default {};
</script>