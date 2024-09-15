<script setup lang="ts">
import AvatarIcon from '~/assets/icons/AvatarIcon.vue';

const isToggleActive = ref(false as boolean);

const image = ref(null as any);


function onFileSelect(event: Event | any) {
	 state.profile_pic = event.target.files[0];
	 if(state.profile_pic){
		const reader = new FileReader();
		reader.onload =(e: Event | any) => {
			state.profile_pic = e.target?.result;				
			console.log(e.target);
		};
		reader.readAsDataURL(state.profile_pic);
	 }
};

async function handleSubmit(){
	const formData = {
		name: state.name,
		age: state.age,
		sex: state.sex,
		contact_number: state.contact_number,
		email: state.email,
		password: state.password,
		profile_pic: state.profile_pic,
	}
	// console.log(`Form Data: ${JSON.stringify(formData)}`);
	console.log(formData);
	
}

const state = reactive({
	name: '' as string,
	age: '' as string,
	sex: '' as string,
	contact_number: '' as string,
	email: '' as string,
	password: '' as string,
	profile_pic: '' as string | null | any,
	profile_pic_url: '' as string
});

function toggleActive(){
	isToggleActive.value = !isToggleActive.value;
	console.log(isToggleActive.value);	
};

function dropFile(e: Event | any){
	state.profile_pic = e.dataTransfer.files[0];
	console.log(state.profile_pic);
};


</script>

<template>
    <div>
        <h1>ABOUT PAGE</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, error similique. Corrupti sapiente suscipit earum, temporibus aliquam ipsum ratione expedita minima, error magnam praesentium, culpa odio incidunt ipsam ea dolor.</p>
    </div>

    <form @submit.prevent="handleSubmit" class="m-5 p-5 border-[1px] background-blue-500 max-w-[700px]">
        <div class="form-container w-full max-w-10 p-5 flex">

            <div class="container-left flex-col items-center justify-start">
                <label for="profile_pic" 
									@dragenter.prevent="toggleActive" 
									@dragleave.prevent="toggleActive" 
									@dragover.prevent
									@drop.prevent="toggleActive"									
									class="border-dotted border-2 border-[#41b883] inline-block px-6 py-2 bg-slate-100 cursor-pointer">
									<div v-if="state.profile_pic" class="w-[150px] h-[150px]">
										<img :src="state.profile_pic" alt="Profile Avatar" class="w-full h-full object-cover">
									</div>
									<AvatarIcon v-else @drop.prevent="dropFile"/>
                </label>
								<input
										type="file"
										@change="onFileSelect"
										class="bg-slate-500 hidden"
										id="profile_pic"
										ref="fileInput"
										/>

								<div v-if="state.profile_pic">
									{{ state.profile_pic.name }}
								</div>
								<div class="" v-else>
									<p>Upload an avatar</p>
									<p>Jpg or png</p>
								</div>

						</div>

            <div class="container-right ml-16 flex-col items-start w-[80%] border-slate-800">

							<input type="text" name="name" v-model="state.name" placeholder="Enter your name" class="border rounded px-3 py-2 mb-3 min-w-[250px] max-w-500px" >
							<input type="text" name="age" v-model="state.age" placeholder="Enter your age" class="border rounded px-3 py-2 mb-3 min-w-[250px] max-w-500px" >
							<input type="text" name="contact_number" v-model="state.contact_number" placeholder="Enter your contact number" class="border rounded px-3 py-2 mb-3 min-w-[250px] max-w-500px">
							<input type="text" name="email" v-model="state.email" placeholder="Enter your email address" class="border rounded px-3 py-2 mb-3 min-w-[250px] max-w-500px">
							<input type="password" name="password" v-model="state.password" placeholder="Enter your password" class="border rounded px-3 py-2 mb-5 min-w-[250px] max-w-500px">
							
							<div class="gender-field flex gap-2 items-center">
								<input type="radio" v-model="state.sex" name="sex" id="male" value="male">
								<label for="male" class="mr-8">Male</label>

								<input type="radio" v-model="state.sex" name="sex" id="female" value="female">
								<label for="female">Female</label>								
							</div>
							<button type="submit" class="px-3 py-2 my-5 bg-green-400 rounded-lg">Upload</button>
						</div>

        
    </div>
    </form>     

    <Footer />
</template>

<style>

</style>