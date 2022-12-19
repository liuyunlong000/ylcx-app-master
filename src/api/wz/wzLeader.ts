import request from '@/utils/request';

/**
 * 院领导
 * @param id
 * @returns {AxiosPromise}
 */
export function leader_list() {
    return request({
        url: '/wzLeader/find_list',
        method: 'get'
    });
}
export function leader_id(id:number) {
    return request({
        url: '/wzLeader/find_id',
        method: 'get',
        params:{id:id}
    });
}
