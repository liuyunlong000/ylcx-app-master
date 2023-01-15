import request from '@/utils/request';

/**
 * 首页轮播图
 * @param id
 * @returns {AxiosPromise}
 */
export function banner_list() {
    return request({
        url: '/wzHome/find_list',
        method: 'get'
    });
}
/**
 * 首页新闻列表
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
/**
 * 首页科研动态
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
/**
 * 首页人才招聘
 * @param id
 * @returns {AxiosPromise}
 */
export function recruit_list(count:number) {
    return request({
        url: '/wzPersonnelRecruit/find_list',
        method: 'get',
        params:{count:count}
    });
}
