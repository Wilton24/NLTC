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
      const url = `http://localhost:5000/admin/allAdmins`;
      this.showUsers = true;
      try{
        const { data, pending, error } = await useFetch(url, {
          headers: {
            Authorization: `Bearer ${token.value}`
          }
        });
        this.users = data.value;
      } catch(err: Error | any){
        console.log(err);
      }
    },
  },
  getters: {

  }
});