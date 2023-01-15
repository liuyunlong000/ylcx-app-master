import request from '@/utils/request';

/**
 * 人才动态
 * @param id
 * @returns {AxiosPromise}
 */
export function dynamic_list(data:any) {
    return request({
        url: '/wzPersonnelDynamic/find_list_by_page',
        method: 'post',
        data,
    });
}
export function dynamic_id(id:number) {
    return request({
        url: '/wzPersonnelDynamic/find_id',
        method: 'get',
        params:{id:id}
    });
}
/**
 * 人才概况
 * @param id
 * @returns {AxiosPromise}
 */
export function talent_list(count:number) {
    return request({
        url: '/wzPersonnelOverview/find_list',
        method: 'get'
    });
}
export function talent_id(id:number) {
    return request({
        url: '/wzPersonnelOverview/find_id',
        method: 'get',
        params:{id:id}
    });
}
/**
 * 人才招聘
 * @param id
 * @returns {AxiosPromise}
 */
export function recruit_list(data:any) {
    return request({
        url: '/wzPersonnelRecruit/find_list_by_page',
        method: 'post',
        data
    });
}
export function recruit_id(id:number) {
    return request({
        url: '/wzPersonnelRecruit/find_id',
        method: 'get',
        params:{id:id}
    });
}
