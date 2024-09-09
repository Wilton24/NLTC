<script setup lang="ts">
import Footer from '~/components/Footer.vue';
import { useHomepageStore } from '~/store/homePage.store';

const homepageStore = useHomepageStore();

const token = useCookie("accessToken");

onMounted(async ()=>{
    await homepageStore.getAdminProfile();
});


</script>

<template>
    <div class="p-5 bg-slate-100">
        <!-- <h1 class="">Hello {{ homepageStore.name }}</h1> -->
        <h1>HOME PAGE</h1>        
        <p>This is HOME in the face of the earth</p>
        <p>Sample change edit for commit</p>
        <h2>Cookie Sample</h2>
        <button @click="homepageStore.getAdminProfile" class="px-3 py-2 bg-green-400">log users</button>
        <div v-if="homepageStore.showUsers && homepageStore.users">
            <div v-for="(user, index) in homepageStore.users">
                <p> User name: {{ user.name }}</p>
                <p> User name: {{ user.email }}</p>
            </div>
        </div>
    </div>
    <Footer/>
</template>

<style>

</style>