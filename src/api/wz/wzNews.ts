import request from '@/utils/request';

/**
 * 新闻列表
 * @param id
 * @returns {AxiosPromise}
 */
export function news_list(data:any) {
    return request({
        url: '/wzNews/find_list_home',
        method: 'post',
        data,
    });
}
export function news_id(id:number) {
    return request({
        url: '/wzNews/find_id',
        method: 'get',
        params:{id:id}
    });
}
/**
 * 通知列表
 * @param id
 * @returns {AxiosPromise}
 */
export function notice_list(data:any) {
    return request({
        url: '/wzNotice/find_list_home',
        method: 'post',
        data,
    });
}
export function notice_id(id:number) {
    return request({
        url: '/wzNotice/find_id',
        method: 'get',
        params:{id:id}
    });
}
