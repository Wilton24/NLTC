export const useAuthStore = defineStore('authStore', {
  state: () => ({
    username: '' as string,
    password: '' as string,
    name: 'John Doe' as string,
    isAuthenticated: false as boolean,
  }),
  actions: {
    logAdmin(){
      console.log(`Username: ${this.username}, Password: ${this.password}, Name: ${this.name}`);
    },
    saveToLocalStorage(){
      const authCred = {
        username: this.username,
        password: this.password
      };
      localStorage.setItem('authCredentials', JSON.stringify(authCred));
    },
    authenticate(){
      if(this.username === 'admin' && this.password === 'pass123'){
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
