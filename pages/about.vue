<script setup lang="ts">
import AvatarIcon from '~/assets/icons/AvatarIcon.vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';

const isToggleActive = ref(false as boolean);

interface IUserFormValues {
  name: string;
  age: string;
  sex: string;
  contact_number: string;
  email: string;
  password: string;
  confirm_password: string;
  profile_pic: File | null;
}


function onFileSelect(event: Event | any) {
	 state.profile_pic = event.target.files[0];
	 if(state.profile_pic){
		const reader = new FileReader();
		reader.onload =(e: Event | any) => {
			state.profile_pic = e.target?.result;				
		};
		reader.readAsDataURL(state.profile_pic);
	 };

	 console.log(`Profile Pic value: ${state.profile_pic}`);
	 
};

async function handleSubmit(values: IUserFormValues | any) {
	// const formData = {
	// 	name: state.name,
	// 	age: state.age,
	// 	sex: state.sex,
	// 	contact_number: state.contact_number,
	// 	email: state.email,
	// 	password: state.password,
	// 	profile_pic: state.profile_pic,

	// };
	console.log(`Values: ${values}`);
	
	
}

const state = reactive({
	name: '' as string,
	age: '' as string,
	sex: '' as string,
	contact_number: '' as string,
	email: '' as string,
	password: '' as string,
	confirm_password: '' as string,
	profile_pic: '' as string | null | any,
});


const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  age: Yup.string().required('Age is required'),
  sex: Yup.string().required('Sex is required'),
  contact_number: Yup.string().required('Contact number is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirm_password: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password'), 'Passwords must match'], 'Passwords must match'),
	profile_pic: Yup.mixed().required('Profile picture is required').test('file', 'Please upload an image file', (value) => {
  return value instanceof File && value.type.startsWith('image/');
}),

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

		<Form @submit="handleSubmit" :validation-schema="validationSchema" class="m-5 p-5 border-[1px] background-blue-500 max-w-[700px]">
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
								<Field
										type="file"
										@change="onFileSelect"
										class="bg-slate-500 hidden"
										id="profile_pic"
										ref="fileInput"
										name="profile_pic"
										/>


								<ErrorMessage name ="profile_pic" class="text-red-500 min-w-[250px] max-w-500px mt-[1px] ms-2"/>
								<div v-if="state.profile_pic">
									{{ state.profile_pic.name }}
								</div>
								<div class="" v-else>
									<p>Upload an avatar</p>
									<p>Jpg or png</p>
								</div>

						</div>

            <div class="container-right ml-16 flex-col items-start w-[80%] border-slate-800">

							<Field type="text" name="name" v-model="state.name" placeholder="Enter your name" class="border rounded px-3 py-2 mt-3 min-w-[250px] max-w-500px" />
							<ErrorMessage name ="name" class="text-red-500 min-w-[250px] max-w-500px mt-[1px] ms-2"/>

							<Field type="text" name="age" v-model="state.age" placeholder="Enter your age" class="border rounded px-3 py-2 mt-3 min-w-[250px] max-w-500px" />
							<ErrorMessage name ="age" class="text-red-500 min-w-[250px] max-w-500px mt-[1px] ms-2"/>

							<Field type="text" name="contact_number" v-model="state.contact_number" placeholder="Enter your contact number" class="border rounded px-3 py-2 mt-3 min-w-[250px] max-w-500px" />
							<ErrorMessage name ="contact_number" class="text-red-500 min-w-[250px] max-w-500px mt-[1px] ms-2"/>

							<Field type="text" name="email" v-model="state.email" placeholder="Enter your email address" class="border rounded px-3 py-2 mt-3 min-w-[250px] max-w-500px" />
							<ErrorMessage name ="email" class="text-red-500 min-w-[250px] max-w-500px mt-[1px] ms-2"/>

							<Field type="password" name="password" v-model="state.password" placeholder="Enter your password" class="border rounded px-3 py-2 mt-3 min-w-[250px] max-w-500px" />
							<ErrorMessage name ="password" class="text-red-500 min-w-[250px] max-w-500px mt-[1px] ms-2"/>

							<Field type="password" name="confirm_password" v-model="state.confirm_password" placeholder="Confirm your password" class="border rounded px-3 py-2 mb-3 mt-3 min-w-[250px] max-w-500px" />
							<ErrorMessage name ="confirm_password" class="text-red-500 min-w-[250px] max-w-500px mt-[1px] ms-2"/>

							<div class="flex gap-2 items-center">
								<Field type="radio" v-model="state.sex" name="sex" id="male" value="male" />
								<label for="male" class="mr-8">Male</label>

								<Field type="radio" v-model="state.sex" name="sex" id="female" value="female" />
								<label for="female">Female</label>								
							</div>
							<ErrorMessage name ="sex" class="text-red-500 min-w-[250px] max-w-500px mt-[1px] ms-2"/>
							<button type="submit" class="px-3 py-2 my-5 bg-green-400 rounded-lg">Upload</button>
						</div>

        
    </div>
    </Form>     

    <Footer />
</template>

<style>

</style>