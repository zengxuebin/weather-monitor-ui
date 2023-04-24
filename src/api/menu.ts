import request from '@/utils/request'

/**
 * 获取路由
 * @returns 路由 
 */
export const getRouters = () => {
  return request({
    method: 'get',
    url: '/auth/getRouters'
  })
}
