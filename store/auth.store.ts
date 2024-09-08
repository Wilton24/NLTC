import type { IUserData } from "~/types/interfaces";
import apiClient from "../utils/apiClient";

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    email: '' as string,
    password: '' as string,
    name: '' as string,
    isAuthenticated: false as boolean,
    emailError: '' as string,
    passwordError: '' as string,
    errorMessage: '' as string,
    errorTimeout: false as boolean,
    authToken: '' as string,
  }),
  actions: {
    async loginUser(userData: IUserData){    
      try{
        const response = await apiClient.post('/login', userData);
        const accessToken = response.data.accessToken;      
        const router = useRouter();  
        
        if(!accessToken){
          return;
        };

        const token = useCookie('accessToken');
        token.value = accessToken;
        router.push('/homepage');
        this.name = response.data.user;

      } catch(error: unknown|any){
        if (error.response && error.response.status === 401) {
          console.log(error.response.data.message);
          this.errorMessage = error.response.data.message
          this.clearErrorMessage();
        } else if (error.response && error.response.status === 400) {
          console.error(error.response.data.message);
          this.errorMessage = error.response.data.message;
          this.clearErrorMessage();
        };
      };
    },
    logout(){
      const token = useCookie('accessToken');
      token.value = null;
    },
    saveToLocalStorage: (token: string): void => {
      localStorage.setItem('accessToken', token);
    },
    clearErrorMessage(){
      if(!this.errorTimeout){
        this.errorTimeout = true;
        const clearErrorTimeOut = setTimeout(() => {
          this.errorMessage = '';
          this.errorTimeout = false;
        },3000);
      }

    }

  },
  
  getters:{

  }
})
