import request from '@/utils/request';

/**
 * 产品列表
 * @param id
 * @returns {AxiosPromise}
 */
export function techno_list() {
    return  request({
        url: '/wzInnovate/find_list',
        method: 'get'
    });
}
