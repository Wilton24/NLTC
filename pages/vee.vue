<template>
  <div class="container mx-auto mt-20">
    <h1 class="text-3xl font-bold text-center mb-4">User Information</h1>
    <form @submit="onSubmit" class="max-w-md mx-auto" :validationSchema="schema">

      <div class="mb-4">
        <label for="name" class="block text-gray-700 font-bold mb-2">Name:</label>
        <input type="text" id="name" name="name" v-model="state.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">      
        <span class="text-red-500">{{ errors.name }}</span>
      </div>

      <div class="mb-4">
        <label for="age" class="block text-gray-700 font-bold mb-2">Age:</label>
        <input type="text" id="age" name="age" v-model="state.age" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <span class="text-red-500">{{ errors.age }}</span>
      </div>

      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
        <input type="email" id="email" name="email" v-model="state.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <span class="text-red-500">{{ errors.email }}</span>
      </div>
      
      <!-- <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded submitButton">Submit</button>
        -->
        <button type="submit" class="bg-[#3f42ff] px-5 py-2 rounded-lg text-2xl hover:bg-[#6568ff] text-white">
          Submit
        </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from 'vee-validate';
import * as z from 'zod';
import { toTypedSchema } from '@vee-validate/zod';

definePageMeta({
  layout: false,
});


const schema = z.object({
  name: z.string().min(1, 'Name is required').max(50),
  age: z.string().min(1, 'Age is required').max(50),
  email: z.string().min(1, 'Email is required').max(50).email(),
});


const {handleSubmit, values, errors} = useForm({
  validationSchema: toTypedSchema(schema),
})

const state = reactive({
  name: '',
  age: '',
  email: '',
})

const onSubmit = handleSubmit((values: any) => {
  console.log(`Values: ${values}`);
});


</script>

<style>
.submitButton{
  background: blue;
  border-radius: 5px;
  margin-top: 10px;
}
.submitButton:hover {
  opacity: 0.6;
}

</style>