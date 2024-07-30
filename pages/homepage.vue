<script setup lang="ts">
import Footer from '~/components/Footer.vue';
import axios from 'axios';

onMounted(() => {
        axios.get('http://localhost:5000').then((res) => {
            console.log(res.data)
        })
    })
</script>

<template>
    <div class="p-5 bg-slate-100">
        <h1>HOME PAGE</h1>
        <p>This is HOME in the face of the earth</p>
        <p>Sample change edit for commit</p>
    </div>

    <Footer/>
</template>

<style>

</style>