import { mount } from '@vue/test-utils'
import ModalBase from '@/ModalBase'

describe('tv-modal', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(ModalBase)
        expect(wrapper.vm).toBeTruthy()
    })
})
