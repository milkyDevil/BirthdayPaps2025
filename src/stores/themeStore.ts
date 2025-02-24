import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: localStorage.getItem('theme') === 'dark',
  }),
  actions: {
    toggleTheme() {
      this.isDark = !this.isDark
      document.documentElement.classList.toggle('dark', this.isDark)
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
    },
    initTheme() {
      document.documentElement.classList.toggle('dark', this.isDark)
    },
  },
})
