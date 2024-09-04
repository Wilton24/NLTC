<script setup lang="ts">
import {useAuthStore} from '../store/auth.store';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';
import type { IUserData } from '~/types/interfaces';


const router = useRouter();

definePageMeta({
  layout: false
});

const authStore = useAuthStore();

const schema = Yup.object({
  email: Yup.string().required().email('Please enter a valid email address'),
  password: Yup.string().required(),
});


onMounted(()=>{
// 
});

  const login = async (values: any | IUserData)=>{
    authStore.loginUser(values);
  };

</script>

<template>
  <div class="login bg-[#202020] text-white">
    <h2>Login</h2>
    <Form @submit="login" :validationSchema="schema">
      <div>
        <label for="email" class="text-3xl">Username</label>
        <Field class="text-black" type="text" id="email" name="email" placeholder="Enter your email" />
         <ErrorMessage name ="email" class="text-red-500 font-bold"/>
      </div>
      <div>
        <label for="password">Password</label>
        <Field class="text-black" type="password" name="password" id="password" placeholder="Enter your password"/>
         <ErrorMessage name ="password"/>
      </div>
      <h2 class="text-red-500">{{ authStore.errorMessage }}</h2>
      <button type="submit" class="text-3xl">Login</button>
      <label class="register p-2 w-3/4 mx-auto bg-green-500 hover:bg-green-400 mt-4 rounded-md text-md font-bold cursor-pointer text-center" for="register">
        <NuxtLink to="/registration">Create New Account</NuxtLink>
      </label>
    </Form>
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
  outline: none;
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
.login button:hover{
  background-color: #3496ff;
}
</style>