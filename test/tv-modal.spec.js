import { mount } from '@vue/test-utils'
import GlobalModal from '@/GlobalModal'

describe('tv-toast', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(GlobalModal)
        expect(wrapper.vm).toBeTruthy()
    })
})
