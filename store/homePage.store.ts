import type { IAdmin } from "~/types/interfaces";
import apiClient from "../utils/apiClient";

export const useHomepageStore = defineStore("homepageStore", {
  state: () => ({
    name: "" as string,
    users: [] as IAdmin[] | any,
    showUsers: false as boolean
  }),
  actions: {
    async getAdminProfile(){
      const token = useCookie("accessToken");
      const url : string = `http://localhost:5000/admin/allAdmins`;
      this.showUsers ? this.showUsers = false : this.showUsers = true;

      try{
        const { data } = await useFetch(url, {
          headers: {
            Authorization: `Bearer ${token.value}`
          }
        });
        this.users = data.value;
        console.log(data.value);
        
      } catch(err: Error | any){
        console.log(err);
      }
    },
    getCurrentUser(){

    }
  },
  getters: {

  }
});