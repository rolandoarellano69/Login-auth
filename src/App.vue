<template>
  <div class="titulo">
    <div>
      <h1>App Name</h1>
    </div>
    <nav v-if="!userStore.loadingSession">
      <router-link to="/" v-if="userStore.userData" class="op1"> | Home</router-link>
      <router-link to="/login" v-if="!userStore.userData" class="op2">Login</router-link> |
      <router-link to="/register" v-if="!userStore.userData" class="op3"
        >Register</router-link
      >
      <br />
      <br />
      <button @click="userStore.logoutUser" v-if="userStore.userData">
        Logout
      </button>
    </nav>
    <div v-else>Loading user...</div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useUserStore } from "./stores/user";
const userStore = useUserStore();
</script>

<style>
.titulo {
  background-color: lightslategrey;
  padding: 15px;
  text-align: center;
  color: whitesmoke;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 20px;
}
.op1  {
  color: whitesmoke;
}
.op2 {
  color: whitesmoke;
}
.op3 {
  color: whitesmoke;
}

</style>
