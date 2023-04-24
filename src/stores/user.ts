import { ref } from 'vue'
import { defineStore } from 'pinia'
import { login, getInfo, logout } from '@/api/login'

export const useUserStore = defineStore('user', () => {
  let token = ref(localStorage.getItem('token'))
  let name  = ref('')
  let roles = ref([])
  let permissions = ref([])

  /**
   * 登陆
   * @param userInfo 表单
   * @returns token
   */
  function loginUser(userInfo: any) {
    return new Promise((resolve, reject) => {
      login(userInfo).then(res => {
        localStorage.setItem('token', res.token)
        token.value = res.token
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  }

  /**
   * 获取用户信息
   * @returns 用户信息
   */
  function getUserInfo() {
    return new Promise((resolve, reject) => {
      getInfo().then(res => {
        const user = res.user
        if (res.roles && res.roles.length > 0) {
          roles.value = res.roles
          permissions.value = res.permissions
        }
        name.value = user.username
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  }

  /**
   * 退出登录
   * @returns 结果 
   */
  function logoutUser() {
    return new Promise((resolve, reject) => {
      logout().then(() => {
        localStorage.removeItem('token')
        token.value = ''
        roles.value = []
        permissions.value = []
        resolve('')
      }).catch(error => {
        localStorage.removeItem('token')
        reject(error)
      })
    })
  }

  return { token, name, roles, permissions, loginUser, getUserInfo, logoutUser }
})

export default useUserStore
