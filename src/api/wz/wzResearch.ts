import request from '@/utils/request';

/**
 * 产品列表
 * @param id
 * @returns {AxiosPromise}
 */
export function research_list() {
    return  request({
        url: '/wzScientific/find_list',
        method: 'get'
    });
}
