// 測試方法，可視需要部分載入
import { mount, createLocalVue, setMethods } from '@vue/test-utils'
// 建立 local 端的 vue-router
import VueRouter from 'vue-router'
const localVue = createLocalVue()
const router = new VueRouter()
localVue.use(VueRouter)
// 載入要解析的 vue，@ 的設定在 jest.config.js 的 moduleNameMapper 內
// 使用正規表示法，並以 $<number> 表示動態資料夾，如 $1
import Chatroom from '@/views/Chatroom'
import VueSocketIO from 'vue-socket.io'
localVue.use(new VueSocketIO({
  connection: 'http://localhost:3000'
}))

describe('聊天室', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Chatroom, {
      localVue,
      router
    })
  })

  test('有1個訊息輸入框和1個按鈕', () => {
    const input = wrapper.find('.form-control')
    const LoginButton = wrapper.find('button')
    expect(input.is('input')).toBe(true)
    expect(LoginButton).toBeTruthy()
  })

  test('send() should be called after clicking the button', () => {
    const stub = jest.fn()
    wrapper.setMethods({ send: stub })
    wrapper.find('button').trigger('submit')
    expect(stub).toHaveBeenCalled()
  })

  test('The chat message can be set.', () => {
    wrapper.setData({
      message: 'yeyeye'
    })
    expect(wrapper.vm.message).toBe('yeyeye')
  })
})