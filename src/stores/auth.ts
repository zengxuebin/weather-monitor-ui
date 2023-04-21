import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)

  function setAuth(isAuth: boolean) {
    if (isAuth) {
      isAuthenticated.value = isAuth
    } else {
      isAuthenticated.value = false
    }
  }

  return { isAuthenticated, setAuth }
})