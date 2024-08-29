export const useAdminStore = defineStore('adminStore', {
  state: () => ({
    username: '' as string,
    password: '' as string,
    name: 'John Doe' as string,
  }),
  actions: {
    logAdmin(){
      console.log(`Username: ${this.username}, Password: ${this.password}, Name: ${this.name}`);
    }
  },
  getters:{

  }
})
