import { defineStore } from 'pinia'
import { ApiClient } from '../helpers'

const AUTH_STORAGE_KEY = 'auth'
// const api = new ApiClient

export const useAuthStore = defineStore({
  id: 'auth',
  persist: true,
  state: () => ({
    // isAuthenticated: false,
    user: null,
    token: null,
    permissions: [],
    tokenExpiration: null
  }),
  getters: {
    hasPermissions: (state) => (requiredPermissions) => {
      return requiredPermissions.every(permission => state.permissions.includes(permission))
    }
  },
  actions: {
    login(user, token, tokenExpiration, permissions) {
      this.user = user
      this.token = token
      this.tokenExpiration = tokenExpiration
      this.permissions = permissions

      // schedule token refresh
      const expirationTime = tokenExpiration
      const refreshTime = expirationTime - 5 * 60 * 1000 // 5 minutes before expiration
      const currentTime = Date.now()
      const refreshDelay = Math.max(refreshTime - currentTime, 0)
      setTimeout(() => {
        this.refreshToken()
      }, refreshDelay)

      console.log(this.$state)
    },
    logout() {
      this.clearAuth()
    },
    // Refresh token
    async refreshToken() {
      try {
        // const response = await api.request('/api/auth/refresh', "POST", null)
        const response = await fetch('/api/auth/refresh', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          }
        })
        const { user, token, tokenExpiration, permissions } = await response.json()

        this.user = user
        this.token = token
        this.tokenExpiration = tokenExpiration
        this.permissions = permissions

        console.log('Token refreshed')
      } catch (error) {
        console.error('Token refresh failed', error)
        this.logout()
      }
    },
    // Load the authentication state from localStorage on store initialization
    initialize() {
      if (this.user) {
        // Already initialized
        return
      }

      const authData = this.$state
      if(!authData || !authData.user) {
        this.clearAuth()
      } else {
        this.user = authData.user
        this.token = authData.token
        this.tokenExpiration = authData.tokenExpiration
        this.permissions = authData.permissions
      }
    },
    // Clear auth state from localStorage and store
    clearAuth() {
      this.user = null
      this.token = null
      this.tokenExpiration = null
      this.permissions = []
    },
  }
})
