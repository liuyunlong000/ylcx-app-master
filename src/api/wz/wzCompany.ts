import request from '@/utils/request';

/**
 * 院领导
 * @param id
 * @returns {AxiosPromise}
 */
export function company_id(id:number) {
    return request({
        url: '/wzBoardOverview/find_id',
        method: 'get',
        params:{id:id}
    });
}
