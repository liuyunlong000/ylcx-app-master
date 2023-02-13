import request from '@/utils/request';
/**
 * 友情链接
 * @param id
 * @returns {AxiosPromise}
 */
export function links_list() {
    return request({
        url: '/wzFriendlyLinks/find_list',
        method: 'get'
    });
}
