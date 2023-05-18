import request from '@/utils/request'

/**
 * 分页获取待处理预警信息
 * @returns 分页待处理预警信息
 */
export const getPageReleaseAlert = (data: any) => {
  return request({
    method: 'post',
    url: '/alert/release/page',
    data
  })
}

/**
 * 分页获取待处理预警信息
 * @returns 分页待处理预警信息
 */
export const generateReleaseAlert = () => {
  return request({
    method: 'post',
    url: '/alert/release/generate',
  })
}

/**
 * 分页获取待处理预警信息
 * @returns 分页待处理预警信息
 */
export const handleAlertIgnore = (data: any) => {
  return request({
    method: 'post',
    url: '/alert/ignore/handle',
    data
  })
}
