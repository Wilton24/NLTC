<template>
    <div class="bg-slate-100 py-4 rounded-lg shadow-lg max-w-md w-full">

      <div class="flex justify-center">        
         <CheckIcon width="150px" height="150px"/>
      </div>

      <h2 class="text-2xl font-bold py-3 mb-4 text-center text-green-600">Success!</h2>
      <p class="text-gray-700 text-center py-2 mb-6">{{ message }}</p>

      <div class="flex justify-center items-center">
        <button @click="closeModal" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-10 rounded">
          OK
        </button>
      </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CheckIcon from '~/assets/icons/CheckIcon.vue';
import { useRegistrationStore } from '~/store/registrationStore';


interface ModalProps {
  message: string;
};

const registerStore = useRegistrationStore();

const props = defineProps<ModalProps>();

const isOpen = ref(true);

const closeModal = () => {
  registerStore.isRegistrationSuccess = false;
};
</script>

<style scoped>

</style>
