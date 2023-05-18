import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: null,
    token: null,
    permissions: null
  }),
  actions: {
    login(userData) {
      this.user = userData.user;
      this.token = userData.token;
      this.permissions = userData.permissions;
    },
    logout() {
      this.user = null;
      this.token = null;
      this.permissions = null;
    }
  },
  getters: {
    isLoggedIn() {
      return !!this.user;
    },
    hasPermission(permission) {
      return this.permissions && this.permissions.includes(permission);
    }
  }
});