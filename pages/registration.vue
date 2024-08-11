<template>
  <div class="max-w-md mx-auto p-4 bg-white rounded-lg shadow-xl mt-20">
    <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="name" class=" block text-sm font-medium text-gray-700">Name</label>
        <input
          v-model="registrationStore.name"
          id="name"
          type="text"
          placeholder="Enter your name"
          class="pl-2 mt-1 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          required
          name="name"
        />
      </div>
      
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          v-model="registrationStore.email"
          id="email"
          type="email"
          placeholder="Enter your email"
          class="pl-2 mt-1 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          required
          name="email"
        />
      </div>
      
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input
          v-model="registrationStore.password"
          id="password"
          type="password"
          placeholder="Enter your password"
          class="pl-2 mt-1 block py-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          required
          name="password"
        />
      </div>
      
      <div>
        <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
        <input
          v-model="registrationStore.confirmPassword"
          id="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          class="pl-2 mt-1 block py-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          required
          name="confirmPassword"
        />
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

definePageMeta({
  layout: false
})

const registrationStore = useRegistrationStore();


const errorMessage = ref<string>('')

function handleSubmit(){
  const formData: IRegistrationData ={
    name: registrationStore.name,
    email: registrationStore.email,
    password: registrationStore.password,
    confirmPassword: registrationStore.confirmPassword
  } 
  registrationStore.registerUser(formData);

  errorMessage.value = ''
  registrationStore.clearForm();
}
</script>

<style>
/* You can add custom styles here if needed */
</style>
