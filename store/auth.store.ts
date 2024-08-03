import axios from "axios";

const baseURL = axios.create({
  baseURL: process.env.BACKEND_URL,
})

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    email: '' as string,
    password: '' as string,
    name: 'John Doe' as string,
    isAuthenticated: false as boolean,
  }),
  actions: {
    loginUser(){
      console.log(this.email, this.password);
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
