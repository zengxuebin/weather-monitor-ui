import request from '@/utils/request'

/**
 * 分页获取监测站
 * @returns 分页检查站
 */
export const getPageAlertRule = (data: any) => {
  return request({
    method: 'post',
    url: '/alert/rule/page',
    data
  })
}