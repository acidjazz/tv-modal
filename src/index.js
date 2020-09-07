import GlobalModal from './GlobalModal.vue'
import { spawn, removeElement } from './utils.js'

let installed = false

export default {
  install(Vue) {
    if (installed) return
    Vue.component('GlobalModal', GlobalModal)
    installed = true
  }
}

export { GlobalModal, spawn, removeElement }
