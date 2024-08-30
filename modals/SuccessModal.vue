<template>
  <!-- <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"> -->
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full py-10">
      <div>
        <!-- <Icon name="mdi:check" class="w-40 h-40 text-green-600 mx-auto scale-x-4 scale-y-4" /> -->
         <CheckIcon width="150px" height="150px"/>
      </div>
      <h2 class="text-2xl font-bold mb-4 text-center text-green-600">Success!</h2>
      <p class="text-gray-700 text-center mb-6">{{ message }}</p>
      <div class="text-center">
        <button @click="closeModal" class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
          OK
        </button>
      </div>
    </div>
  <!-- </div> -->
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CheckIcon from '~/assets/icons/CheckIcon.vue';

interface ModalProps {
  message: string;
}

const props = defineProps<ModalProps>();

const isOpen = ref(true);

const closeModal = () => {
  isOpen.value = false;
};
</script>

<style scoped>

</style>
