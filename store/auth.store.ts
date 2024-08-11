import { baseURL } from "~/utils/apiClient";

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
    loginUser(){
      // baseURL.post();
    },
    validate(){
      // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      // if(!emailRegex.test(this.email)){
      //   this.emailError = 'Please enter a valid email address';
      // } else{
      //   return false;
      // };      
    },
    regiserUser(){

    },
    saveToLocalStorage(){
      const authCred = {
        email: this.email,
        password: this.password
      };
      localStorage.setItem('authCredentials', JSON.stringify(authCred));
    },
    authenticate(){
      if(this.email === 'admin' && this.password === 'pass123'){
        this.isAuthenticated = true;
        this.saveToLocalStorage();
      }else{
        this.isAuthenticated = false;
      }
    },
  },
  
  getters:{

  }
})
