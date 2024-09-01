<template>
  <div v-if="registrationStore.isRegistrationSuccess" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <SuccessModal :message="registrationStore.modalMessage" />
  </div>
  <div v-else class="max-w-md mx-auto p-4 bg-white rounded-lg shadow-xl mt-20">
    <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
    <Form @submit="onSubmit" class="space-y-4" :validationSchema="schema">
      <div>
        <label for="name" class=" block text-sm font-medium text-gray-700">Name</label>
        <Field
          v-model="registrationStore.name"
          id="name"
          type="text"
          placeholder="Enter your name"
          class="pl-2 mt-1 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"          
          name="name"
        />
      </div>

      <div class="pl-2 block w-full">
        <ErrorMessage class="text-red-500 font-bold" name="name"/> 
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <Field
          v-model="registrationStore.email"
          id="email"
          type="email"
          placeholder="Enter your email"
          class="pl-2 mt-1 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"          
          name="email"
        />
      </div>

      <div class="pl-2 block w-full">
        <ErrorMessage class="text-red-500 font-bold" name="email"/> 
      </div>
      
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <Field
          v-model="registrationStore.password"
          id="password"
          type="password"
          placeholder="Enter your password"
          class="pl-2 mt-1 block py-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"          
          name="password"
        />
      </div>

      <span class="pl-2 block w-full">
        <ErrorMessage class="text-red-500 font-bold" name="password"/> 
      </span>
      
      <div>
        <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
        <Field
          v-model="registrationStore.confirmPassword"
          id="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          class="pl-2 mt-1 block py-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"          
          name="confirmPassword"
        />
      </div>

      <div class="pl-2 block w-full">
        <ErrorMessage class="text-red-500 font-bold" name="confirmPassword"/> 
      </div>

      <div class="btn-container flex items-center justify-between px-4">
        <button type="submit" class="bg-[#3f42ff] px-5 py-2 rounded-lg text-2xl hover:bg-[#6568ff] text-white">
          Register
        </button>

        <button @click="$router.go(-1)" class="bg-[#5f5f5f] px-5 py-2 rounded-lg text-2xl hover:bg-[#868686] text-white">
          Back
        </button>
      </div>

      <!-- <p class="text-red-500 text-sm">{{ errorMessage }}</p> -->
    </Form>
  </div>
</template>



<script lang="ts" setup>
import { useRegistrationStore, type IRegistrationData } from '~/store/registrationStore';
import * as yup from 'yup';
import { Form, Field, ErrorMessage } from 'vee-validate';
import SuccessModal from '~/modals/SuccessModal.vue';


onMounted(()=>{
  registrationStore.clearForm();
})

definePageMeta({
  layout: false
});

const registrationStore = useRegistrationStore();

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup.string().required('Confirm password is required').oneOf([yup.ref('password'), 'Passwords must match'], 'Passwords must match'),
});

function onSubmit(values: IRegistrationData | any) {
  registrationStore.modalMessage = 'Registration Successful';
  registrationStore.isRegistrationSuccess = true;
  console.log(values);
  registrationStore.registerUser(values);
};


</script>

<style>

</style>
