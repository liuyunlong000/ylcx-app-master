import request from '@/utils/request';

/**
 * 院领导
 * @param id
 * @returns {AxiosPromise}
 */
export function org_id(id:number) {
    return request({
        url: '/wzCompanyOrg/find_id',
        method: 'get',
        params:{id:id}
    });
}
