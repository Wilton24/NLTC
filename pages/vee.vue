<template>
  <Form @submit="onSubmit" :validation-schema="schema" class="bg-green-500 py-4 px-8">
    <Field name="email" type="email" class="block" placeholder="Enter your email"/>
    <ErrorMessage name="email" />
    <Field name="password" type="password"class="block mt-2" placeholder="Enter your password" />
    <ErrorMessage name="password" />
    <button class="bg-blue-500 text-white px-4 py-2 block">Submit</button>
  </Form>
</template>
<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

definePageMeta({
  layout: false
});

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});
function onSubmit(values) {
  // Submit values to API...
  // alert(JSON.stringify(values, null, 2));
  console.log('Not working yet...');
  
};


</script>