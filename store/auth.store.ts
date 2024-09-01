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
    async loginUser(userData: IUserData){    
      const response = await apiClient.post('/login', userData);
      const accessToken = response.data.accessToken;      

      try{
        if(accessToken){
          const token = useCookie('accessToken');
          token.value = accessToken;
        } else{
          return null;
        };
      } catch(error){
        console.log(response.data.message);
      }

    },
    logout(){
      const token = useCookie('accessToken');
      token.value = null;
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
