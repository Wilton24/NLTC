
export interface IRegistrationData {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}



export const useRegistrationStore = defineStore("registrationStore", {
  state: () => ({
    email: "" as string,
    password: "" as string,
    name: "" as string,
    confirmPassword: "" as string
  }),
  actions: {
    registerUser(formData: IRegistrationData){
      console.log(formData)
    }
  },
});