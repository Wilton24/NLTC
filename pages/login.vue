<template>
  <div class="login bg-[#202020] text-white">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username" class="text-3xl">Username</label>
        <input class="text-black" type="text" v-model="authStore.username" id="username" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input class="text-black" type="password" v-model="authStore.password" id="password" required />
      </div>
      <button type="submit" class="text-3xl">Login</button>
      <label class="register" for="register">Register</label>
    </form>
  </div>
</template>

<script setup lang="ts">
import {useAuthStore} from '../store/auth.store';

const authStore = useAuthStore();

definePageMeta({
  layout: false
})

const handleSubmit = () => {
  authStore.authenticate();
};
</script>

<style scoped>
.login {
  max-width: 300px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.login h2 {
  margin-bottom: 20px;
  text-align: center;
}
.login div {
  margin-bottom: 15px;
}
.login label {
  display: block;
  margin-bottom: 5px;
}
.login input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
.login button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
