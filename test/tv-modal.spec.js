import { mount } from '@vue/test-utils'
import ModalBase from '@/ModalBase'

describe('tv-toast', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(ModalBase)
        expect(wrapper.vm).toBeTruthy()
    })
})
