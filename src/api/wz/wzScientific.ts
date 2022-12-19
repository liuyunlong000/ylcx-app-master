import request from '@/utils/request';

/**
 * 科研动态
 * @param id
 * @returns {AxiosPromise}
 */
export function scientific_list(count:number) {
    return request({
        url: '/wzScientificDynamic/find_list',
        method: 'get',
        params:{count:count}
    });
}
export function scientific_id(id:number) {
    return request({
        url: '/wzScientificDynamic/find_id',
        method: 'get',
        params:{id:id}
    });
}
