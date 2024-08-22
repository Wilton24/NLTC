import type { IUserData } from "~/types/interfaces";
import apiClient from "../utils/apiClient";

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    email: '' as string,
    password: '' as string,
    name: 'John Doe' as string,
    isAuthenticated: false as boolean,
    emailError: '' as string,
    passwordError: '' as string
  }),
  actions: {
    async loginUser(){    
      const response = await apiClient.post('/login', {email: this.email, password: this.password});
      const accessToken = response.data.accessToken;
      if(accessToken){
        this.isAuthenticated = true;
        this.saveToLocalStorage(accessToken);
      } else{
        this.isAuthenticated = false;
      };
    },
    validate(){
      // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      // if(!emailRegex.test(this.email)){
      //   this.emailError = 'Please enter a valid email address';
      // } else{
      //   return false;
      // };      
    },
    saveToLocalStorage: (token: string): void => {
      localStorage.setItem('accessToken', token);
    },
    regiserUser(){

    },

  },
  
  getters:{

  }
})
