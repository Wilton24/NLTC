import { useAuthStore } from "~/store/auth.store";

const publicRoutes = [
  '/login', 
  '/register', 
  '/forgot-password'
];

export default defineNuxtRouteMiddleware((to, from) => {
  const { $pinia } = useNuxtApp();
  const authStore = useAuthStore($pinia);

  if (authStore.isAuthenticated) {
    return;
  }

  if (!publicRoutes.includes(to.path)) {
    return navigateTo('/login');
  }
});
