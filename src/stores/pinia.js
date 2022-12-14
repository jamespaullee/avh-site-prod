import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: 'pricing',
    state: () => ({
      zipCode: null,
      serviceDesc: null,
      serviceUrgency: null
    })
  })