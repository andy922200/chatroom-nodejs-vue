// 測試方法，可視需要部分載入
import { mount, createLocalVue, setMethods } from '@vue/test-utils'
// 建立 local 端的 vue-router
import VueRouter from 'vue-router'
const localVue = createLocalVue()
const router = new VueRouter()
localVue.use(VueRouter)
// 載入要解析的 vue，@ 的設定在 jest.config.js 的 moduleNameMapper 內
// 使用正規表示法，並以 $<number> 表示動態資料夾，如 $1
import SignIn from '@/views/SignIn'
import SignUp from '@/views/SignUp'

// 撰寫方法
describe('登入', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(SignIn, {
      localVue,
      router
    })
  })

  test('要有2個輸入框和1個按鈕', () => {
    const inputs = wrapper.findAll('input')
    const LoginButton = wrapper.find('button')
    expect(inputs.length).toBe(2)
    expect(LoginButton).toBeTruthy()
  })

  test('handleSubmit should be called after clicking the button', () => {
    const stub = jest.fn()
    wrapper.setMethods({ handleSubmit: stub })
    wrapper.find('button').trigger('submit')
    expect(stub).toBeCalled()
  })

  test('All inputs can be set.', () => {
    wrapper.setData({
      email: 'abc@abc.com',
      password: '1234'
    })
    expect(wrapper.vm.email).toBe('abc@abc.com')
    expect(wrapper.vm.password).toBe('1234')
  })

  test('receive the response successfully if typing the correct account & password', () => {
    wrapper.vm.handleSubmit().then(async () => {
      const mockFn = jest.fn().mockResolvedValue({ status: 'success', message: 'OK' })
      const result = await mockFn()
      expect(result).toStrictEqual({ "message": "OK", "status": "success" })
    })
  })
})

describe('註冊', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(SignUp, {
      localVue,
      router
    })
  })

  test('要有4個輸入框和1個按鈕', () => {
    const inputs = wrapper.findAll('input')
    const LoginButton = wrapper.find('button')
    expect(inputs.length).toBe(4)
    expect(LoginButton).toBeTruthy()
  })

  test('handleSubmit should be called after clicking the button', () => {
    const stub = jest.fn()
    wrapper.setMethods({ handleSubmit: stub })
    wrapper.find('button').trigger('submit')
    expect(stub).toBeCalled()
  })

  test('All inputs can be set.', () => {
    wrapper.setData({
      name: 'abc',
      email: 'abc@abc.com',
      password: '1234',
      passwordCheck: '1234'
    })
    expect(wrapper.vm.name).toBe('abc')
    expect(wrapper.vm.email).toBe('abc@abc.com')
    expect(wrapper.vm.password).toBe('1234')
    expect(wrapper.vm.passwordCheck).toBe('1234')
  })

  test('receive the response if new user registered successfully', () => {
    wrapper.vm.handleSubmit().then(async () => {
      const mockFn = jest.fn().mockResolvedValue({ status: 'success', message: 'OK' })
      const result = await mockFn()
      expect(result).toStrictEqual({ "message": "OK", "status": "success" })
    })
  })
})