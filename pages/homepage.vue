<script setup lang="ts">
import Footer from '~/components/Footer.vue';
import { useHomePageStore } from '~/store/homePage.store';

const homepageStore = useHomePageStore();

onMounted(async ()=>{
//    setTimeout(async ()=>{
//     await homepageStore.getAdminProfile();
//    }, 3000) 
});


</script>

<template>
    <div class="p-5 bg-slate-100">
        <h1 class="">Hello {{ homepageStore.name }}</h1>
        <h1>HOME PAGE</h1>        
        <p>This is HOME in the face of the earth</p>
        <p>Sample change edit for commit</p>
        <h2>Cookie Sample</h2>
    </div>
    <Footer/>
</template>

<style>

</style>