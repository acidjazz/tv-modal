<template>
  <ModalBase ref="ModalBase" :active="active" :destroyed="destroy">
    <div class="sm:flex sm:items-start">
      <div
        :class="typeColors[type]"
        class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10">
        <IconCheck v-if="type === 'success'" class="h-5 w-5" primary="text-green-600" secondary="text-green-500" />
        <IconInfo v-if="type === 'info'" class="h-5 w-5" primary="text-blue-600" secondary="text-blue-500" />
        <IconBang v-if="type === 'danger'" class="h-5 w-5" primary="text-red-600" secondary="text-red-500" />
        <IconBang v-if="type === 'warning'" class="h-5 w-5" primary="text-yellow-600" secondary="text-yellow-500" />
      </div>
      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
          {{ title }}
        </h3>
        <div class="mt-2">
          <p class="text-sm leading-5 text-gray-500">
            {{ body }}
          </p>
        </div>
      </div>
    </div>
    <div v-if="primary" class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
      <PushButton
        v-if="primary"
        class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"
        :theme="primary.theme"
        @click="action('primary')"
      >
        {{ primary.label }}
      </PushButton>
      <PushButton
        v-if="secondary"
        class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"
        :theme="secondary.theme"
        @click="action('secondary')"
      >
        {{ secondary.label }}
      </PushButton>
    </div>
  </ModalBase>
</template>

<script>
import { removeElement } from 'tv-modal'
import ModalBase from './ModalBase.vue'
import { PushButton } from 'tv-button'
import { IconCheck, IconInfo, IconBang } from 'tv-icon'
export default {
  components: { ModalBase, PushButton, IconCheck, IconInfo, IconBang },
  props: {
    type: {
      type: String,
      required: false,
      default: 'info',
      validate: (type) => { return ['success', 'info', 'danger', 'warning'].includes(type) },
    },
    title: {
      type: [Boolean, String],
      required: false,
      default: false,
    },
    body: {
      type: String,
      required: true,
    },
    primary: {
      type: [Boolean, Object],
      required: false,
      default: false,
    },
    secondary: {
      type: [Boolean, Object],
      required: false,
      default: false,
    },
  },
  data () {
    return {
      active: false,
      typeColors: {
        success: 'bg-green-100',
        info: 'bg-blue-100',
        danger: 'bg-red-100',
        warning: 'bg-yellow-100',
      }
    }
  },
  async mounted () {
    this.active = true
  },
  methods: {
    async focus (index = 0) {
      document.getElementById(`modal-button-${index}`).focus()
    },
    async action (type) {
      this.$refs.ModalBase.destroy()
      if (type === 'primary')
        this.primary.action()
      if (type === 'secondary')
        this.secondary.action()
    },
    async destroy ()  {
      this.active = false
      this.$destroy()
      removeElement(this.$el)
    },
  },
}
</script>
