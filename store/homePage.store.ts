import apiClient from "../utils/apiClient";


export const useHomePageStore = defineStore('homePageStore', {
  state: () => ({
    name: '' as string,
  }),
  getters: {
    
  },
  actions: {
    async getAdminProfile(){
      try{
        const response = await apiClient.get('/admin/allAdmins');
        // this.name = response.data              
        console.log(response.data)
      } catch(err: Error | any){

      }
    }
  }
});