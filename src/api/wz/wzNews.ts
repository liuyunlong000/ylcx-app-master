import request from '@/utils/request';

/**
 * 新闻列表
 * @param id
 * @returns {AxiosPromise}
 */
export function news_list(count:number) {
    return request({
        url: '/wzNews/find_list',
        method: 'get',
        params:{count:count}
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
export function notice_list(count:number) {
    return request({
        url: '/wzNotice/find_list',
        method: 'get',
        params:{count:count}
    });
}
export function notice_id(id:number) {
    return request({
        url: '/wzNotice/find_id',
        method: 'get',
        params:{id:id}
    });
}
