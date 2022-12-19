import request from '@/utils/request';

/**
 * 产品列表
 * @param id
 * @returns {AxiosPromise}
 */
export function platform_list() {
    return  request({
        url: '/wzInnovatePlateForm/find_list',
        method: 'get'
    });
}
