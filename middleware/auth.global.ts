import { useAuthStore } from "~/store/auth.store";

const publicRoutes = [
  '/login', 
  '/registration', 
  '/forgot-password'
];

export default defineNuxtRouteMiddleware((to, from) => {
  const { $pinia } = useNuxtApp();
  const authStore = useAuthStore($pinia);

  const token = useCookie('accessToken');

  if (token.value) {
    authStore.isAuthenticated = true;
  } else {
    authStore.isAuthenticated = false;
  }
  if (authStore.isAuthenticated) {
    return;
  }

  if (publicRoutes.includes(to.path)) {
    return;
  }

  return navigateTo('/login');
});
