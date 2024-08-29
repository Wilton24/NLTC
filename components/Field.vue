<template>
  <div>
    <input type="text" v-model="value" placeholder="Enter your email">
  </div>
</template>


<script setup lang="ts">
import { useField } from 'vee-validate';

const {value, errorMessage} = useField('email');




</script>