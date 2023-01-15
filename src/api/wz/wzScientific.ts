import request from '@/utils/request';

/**
 * 科研动态
 * @param id
 * @returns {AxiosPromise}
 */
export function scientific_list(data:any) {
    return request({
        url: '/wzScientificDynamic/find_list_by_page',
        method: 'post',
        data
    });
}
export function scientific_id(id:number) {
    return request({
        url: '/wzScientificDynamic/find_id',
        method: 'get',
        params:{id:id}
    });
}
