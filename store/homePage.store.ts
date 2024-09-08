import apiClient from "../utils/apiClient";



export const useHomepageStore = defineStore("homepageStore", {
  state: () => ({
    name: "" as string,
    userData: [] as any
  }),
  actions: {
    async getAdminProfile(){
      const token = useCookie("accessToken");
      const url = `http://localhost:5000/admin/allAdmins`;
      try{
        const { data, pending, error } = await useFetch(url, {
          headers: {
            Authorization: `Bearer ${token.value}`
          }
        });
        this.userData = data.value;
        console.log(this.userData);
        
      } catch(err: Error | any){

      }
    },
    sayHi(){
      console.log("hello yea")
    },
  },
  getters: {

  }
});