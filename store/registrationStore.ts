import axios from "axios";
import apiClient from "../utils/apiClient";

export interface IRegistrationData {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
};

export const useRegistrationStore = defineStore("registrationStore", {
  state: () => ({
    email: "" as string,
    password: "" as string,
    name: "" as string,
    confirmPassword: "" as string
  }),
  actions: {
    async registerUser(formData: IRegistrationData){      
     const data = await apiClient.post('/register', formData);         
    },
    clearForm(){
      this.email = '';
      this.password = '';
      this.name = '';
      this.confirmPassword = '';
    }
  },
});