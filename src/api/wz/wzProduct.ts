import request from '@/utils/request';

/**
 * 产品列表
 * @param id
 * @returns {AxiosPromise}
 */
export function product_list() {
    return  request({
        url: '/wzProduct/find_list',
        method: 'get'
    });
}
