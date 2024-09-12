<script setup lang="ts">
import AvatarIcon from '~/assets/icons/AvatarIcon.vue';


function onFileSelect(event: Event) {
        console.log(event)
    };

async function submitMultiple(){
    
}


</script>
<!-- block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 -->

<template>
    <div>
        <h1>ABOUT PAGE</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, error similique. Corrupti sapiente suscipit earum, temporibus aliquam ipsum ratione expedita minima, error magnam praesentium, culpa odio incidunt ipsam ea dolor.</p>
    </div>

    <form @submit.prevent="submitMultiple" class="m-5 p-5 border-[1px] background-blue-500">
        <div class="form-container w-full max-w-10 p-5 ">
            <div class="container-left flex-col items-center">
                <label for="avatar-icon" class="border border-gray-300 inline-block px-6 py-2 cursor-pointer">
									<AvatarIcon />
                </label>

								<input
										type="file"
										multiple
										@change="onFileSelect"
										class="bg-slate-500 hidden"
										id="avatar-icon"
										/>
								</div>
								<p></p>
            <div class="container-right">
							<button type="submit" class="px-3 py-2 my-5 bg-green-400 rounded-lg">Upload</button>
						</div>

        
    </div>
    </form>     

    <Footer />
</template>

<style>

</style>