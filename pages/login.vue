<script setup lang="ts">
import {useAuthStore} from '../store/auth.store';
import { useForm,  useField } from 'vee-validate';
import * as z from 'zod';
import { toTypedSchema } from '@vee-validate/zod';

definePageMeta({
  layout: false
});

const authStore = useAuthStore();

const submitted = ref(false);
const schema = z.object({
  email: z.string().min(1,'Email is required').max(50).email(),
  password: z.string().min(1,'Password is required').max(50),
});

onMounted(()=>{
  authStore.emailError = '';
  authStore.passwordError = '';
})


type User = z.infer<typeof schema>

const validationSchema = toTypedSchema(schema);

// const { handleSubmit, values, errors, isSubmitting,validate } = useForm<User>({
//   validationSchema,
//   initialValues:{
//     email: authStore.email,
//     password: authStore.password
//   }
// });

  const userData: User = {
    email: authStore.email,
    password: authStore.password
  };

  const login = async ()=>{
    
  }

</script>

<template>
  <div class="login bg-[#202020] text-white">
    <h2>Login</h2>
    <form @submit.prevent="login" :validationSchema="schema">
      <div>
        <label for="email" class="text-3xl">Username</label>
        <input class="text-black" type="text" v-model="authStore.email" id="email" name="email" placeholder="Enter your email" />
        <span v-if="authStore.emailError" class="text-red-500">{{ authStore.emailError }}</span>
      </div>
      <div>
        <label for="password">Password</label>
        <input class="text-black" type="password" v-model="authStore.password" name="password" id="password" placeholder="Enter your password"/>
        <span v-if="authStore.passwordError" class="text-red-500">{{ authStore.passwordError }}</span>
      </div>
      <button type="submit" class="text-3xl">Login</button>
      <label class="register" for="register">
        <NuxtLink to="/registration">Register</NuxtLink>
      </label>
    </form>
  </div>
</template>



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