import request from '@/utils/request'

/**
 * 登陆方法
 * @param data usernamae password code
 * @returns token 
 */
export function login(data: any) {
  return request({
    method: 'post',
    headers: {
      isToken: false
    },
    url: '/login',
    data
  })
}

export function getCodeImg() {
  return request({
    method: 'get',
    headers: {
      isToken: false
    },
    url: '/code/captchaImage',
  })
}
