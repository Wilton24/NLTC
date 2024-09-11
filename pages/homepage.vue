<script setup lang="ts">
import Footer from '~/components/Footer.vue';
import { useHomepageStore } from '~/store/homePage.store';
import { useAuthStore } from '~/store/auth.store';
import EditIcon from '~/assets/icons/EditIcon.vue';
import TrashIcon from '~/assets/icons/TrashIcon.vue';

const homepageStore = useHomepageStore();
const authStore = useAuthStore();
const token = useCookie("accessToken");

const fileInput = ref(null);

onMounted(async ()=>{
    await homepageStore.getAdminProfile();
    homepageStore.showUsers = false;
});


function uploadFile(){

}

function onFileSelect(event: any) {
    console.log(`Function working`);
    
    console.log(event.target.files[0]);
    
}


</script>

<template>
    <div class="p-5 bg-slate-100">
        <h1 class="capitalize">Hello {{ authStore.name }}, ^_^</h1>
        <h1>HOME PAGE</h1>        
        <p>This is HOME in the face of the earth</p>

        <button @click="homepageStore.getAdminProfile" class="px-3 py-2 my-5 bg-green-400">show admins</button>

        <div v-if="homepageStore.showUsers">
            <div>
                <table class="table w-full border border-gray-300">
                    <thead>
                        <tr>
                            <th class="text-left px-4 py-2 bg-gray-100 border-b border-gray-300">Id</th>
                            <th class="text-left px-4 py-2 bg-gray-100 border-b border-gray-300">Name</th>
                            <th class="text-left px-4 py-2 bg-gray-100 border-b border-gray-300">Email</th>
                            <th class="text-left px-4 py-2 bg-gray-100 border-b border-gray-300">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) in homepageStore.users" :key="index">
                            <td class="px-4 py-2 border-b border-gray-300">{{ user.id }}</td>
                            <td class="px-4 py-2 border-b border-gray-300">{{ user.name }}</td>
                            <td class="px-4 py-2 border-b border-gray-300">{{ user.email }}</td>
                            <td class="px-4 py-2 border-b border-gray-300 flex justify-normal">
                                <button class="text-blue-500 hover:text-blue-700"><EditIcon height="20px" width="20px"/></button>
                                <button class="text-red-500 hover:text-red-700 ml-2"><TrashIcon height="20px" width="20px"/></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <form @submit="uploadFile">
        <div class="file-upload">
        <input type="file" name="avatar" ref="fileInput" @change="onFileSelect">
        <button type="submit" class="px-3 py-2 my-5 bg-green-400">Upload</button>
    </div>
    </form>

    <Footer/>
</template>

<style>

</style>