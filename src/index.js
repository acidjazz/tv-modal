import ModalBase from './ModalBase.vue'
import GlobalModal from './GlobalModal.vue'
import { spawn, removeElement } from './utils.js'

let installed = false

export default {
  install(Vue) {
    if (installed) return
    Vue.component('ModalBase', ModalBase)
    Vue.component('GlobalModal', GlobalModal)
    installed = true
  }
}

export { ModalBase, GlobalModal, spawn, removeElement }
