<template>
  <div class="max-w-md mx-auto p-4 bg-white rounded-lg shadow-xl mt-20">
    <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
    <form @submit="onSubmit" class="space-y-4" :validationSchema="schema">
      <div>
        <label for="name" class=" block text-sm font-medium text-gray-700">Name</label>
        <input
          v-model="registrationStore.name"
          v-bind="name"
          id="name"
          type="text"
          placeholder="Enter your name"
          class="pl-2 mt-1 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"          
          name="name"
        />
      </div>

      <div class="pl-2 block w-full">
        <p class="text-red-500 font-bold"> {{ errors.name }}</p>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          v-model="registrationStore.email"
          v-bind="email"
          id="email"
          type="email"
          placeholder="Enter your email"
          class="pl-2 mt-1 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"          
          name="email"
        />
      </div>

      <div class="pl-2 block w-full">
        <p v-if="errors.email" class="text-red-500 font-bold"> {{ errors.email }}</p>
      </div>
      
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input
          v-model="registrationStore.password"
          v-bind="password"
          id="password"
          type="password"
          placeholder="Enter your password"
          class="pl-2 mt-1 block py-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"          
          name="password"
        />
      </div>

      <span class="pl-2 block w-full">
        <p class="text-red-500 font-bold"> {{ errors.password }}</p>
      </span>
      
      <div>
        <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
        <input
          v-model="registrationStore.confirmPassword"
          v-bind="confirmPassword"
          id="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          class="pl-2 mt-1 block py-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"          
          name="confirmPassword"
        />
      </div>

      <div class="pl-2 block w-full">
        <p class="text-red-500 font-bold"> {{ errors.confirmPassword }}</p>
      </div>

      <div class="btn-container flex items-center justify-between px-4">
        <button type="submit" class="bg-[#3f42ff] px-5 py-2 rounded-lg text-2xl hover:bg-[#6568ff] text-white">
          Register
        </button>

        <button @click="$router.go(-1)" class="bg-[#5f5f5f] px-5 py-2 rounded-lg text-2xl hover:bg-[#868686] text-white">
          Back
        </button>
      </div>

      <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>
    </form>
  </div>
</template>



<script lang="ts" setup>
import { ref } from 'vue';
import { useRegistrationStore, type IRegistrationData } from '~/store/registrationStore';
import { useForm } from 'vee-validate';
import * as z from 'zod';
import { toTypedSchema } from '@vee-validate/zod';

definePageMeta({
  layout: false
});

const state = reactive({
  error: '',
});

const schema = z.object({
  name: z.string().min(1, 'Name is required').max(50),
  email: z.string().min(2, 'Please input a valid email').max(50).email(),
  password: z.string().min(1, 'Password is required').max(50),
  confirmPassword: z.string().min(1, 'This field is required').max(50),
  }).refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'], 
    message: "Passwords don't match",
});

const registrationStore = useRegistrationStore();

const {  handleSubmit, errors, isSubmitting, validate, defineField  } = useForm({
  validationSchema: toTypedSchema(schema),
  validateOnMount: false,
});

const name = defineField('name');
const email = defineField('email');
const password = defineField('password');
const confirmPassword = defineField('confirmPassword');

const onSubmit = handleSubmit((values: any) => {
  console.log('Button working')
});

const errorMessage = ref<string>('');

// function onSubmit(){
//   const formData: IRegistrationData ={
//     name: registrationStore.name,
//     email: registrationStore.email,
//     password: registrationStore.password,
//     confirmPassword: registrationStore.confirmPassword
//   } 
//   registrationStore.registerUser(formData);

//   errorMessage.value = ''
// };




</script>

<style>

</style>
